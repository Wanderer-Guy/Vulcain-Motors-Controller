import { MotorHatOptions } from "../../interfaces/engine";
import { Position, SaveInterface } from "../../interfaces/save";
import Save from "../../utils/save";

const [executor, file, state] = process.argv;

const MotorHat = state !== 'local' ? require('motor-hat') : require('./MotorHatMock');
const directionTable = { back: -1, fwd: 1 };

class Engine {
  motors: any;
  speed: { x: string; y: string };
  xMotor: any;
  yMotor: any;
  config: SaveInterface;

  constructor(options: MotorHatOptions, xSize: number, ySize: number) {
    const defaultConfig = {
      origin: { x: 0, y: 0, z: 0 },
      position: { x: 0, y: 0, z: 0 },
      xSize,
      ySize,
    };

    this.motors = MotorHat(options);
    this.motors.init();
    this.speed = { x: 'slow', y: 'slow' };
    this.xMotor = this.motors.steppers[0];
    this.yMotor = this.motors.steppers[1];
    this.config = new Save('machine-config', defaultConfig);
    this.initialize();
    //this.moveToOrigin();
  }

  getPosition(): Position {
    return this.config.getSave().position;
  }

  initialize() {
    this.motors.steppers[0].setMicrosteps(16);
    this.motors.steppers[1].setMicrosteps(16);
    this.motors.steppers[0].setCurrent(0.75);
    this.motors.steppers[1].setCurrent(0.75);
  }

  moveTo(position: Position) {
    let configData = this.config.getSave();

    while (configData.position.x !== position.x) {
      const direction = configData.position.x - position.x > 0 ? 'back' : 'fwd';
      this.xMotor.oneStepSync(direction);
      configData.position.x += directionTable[direction];
      configData = this.config.setData('position', configData.position);
    }

    while (configData.position.y !== position.y) {
      const direction = configData.position.y - position.y > 0 ? 'back' : 'fwd';
      this.yMotor.oneStepSync(direction);
      configData.position.y += directionTable[direction];
      configData = this.config.setData('position', configData.position);
    }
  }

  moveToOrigin(): void {
    const configData = this.config.getSave();
    this.moveToQuickly(configData.origin);
    this.releaseAll();
  }

  moveToQuickly(position: Position): void {
    this.xSpeed('high');
    this.ySpeed('high');
    this.moveTo(position);
  }

  moveToSlowly(position: Position): void {
    this.xSpeed('slow');
    this.ySpeed('slow');
    this.moveTo(position);
  }

  xSpeed(speed: string): void {
    if (speed !== this.speed.x) {
      if (speed === 'high') {
        this.xMotor.setStyle('interleaved');
        this.xMotor.setSpeed({ rpm: 10 });
      } else {
        this.xMotor.setStyle('microstep');
        this.xMotor.setSpeed({ rpm: 1 });
      }
    }
  }

  ySpeed(speed: string): void {
    if (speed != this.speed.y) {
      if (speed === 'high') {
        this.yMotor.setStyle('interleaved');
        this.yMotor.setSpeed({ rpm: 10 });
      } else {
        this.yMotor.setStyle('microstep');
        this.yMotor.setSpeed({ rpm: 1 });
      }
    }
  }

  backward(): void {
    this.motors.steppers[0].stepSync('back', 1000);
    this.motors.steppers[1].stepSync('back', 1000);
  }

  releaseAll(): void {
    this.xMotor.releaseSync();
    this.yMotor.releaseSync();
  }
};

export default Engine;
