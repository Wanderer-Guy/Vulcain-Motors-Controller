const MotorHat = require("motor-hat");
const { Save } = require("../../utils/save");

const directionTable = { back: -1, fwd: 1 };

class Machine {
  constructor(options, xSize, ySize) {
    const defaultConfig = {
      origin: { x: 0, y: 0, z: 0 },
      position: { x: 0, y: 0, z: 0 },
      xSize,
      ySize,
    };
    this.motors = MotorHat(options);
    this.xMotor = this.motors.steppers[0];
    this.yMotor = this.motors.steppers[1];
    this.config = new Save("machine-config", defaultConfig);
    this.initialize();
    this.moveToOrigin();
  }

  initialize() {
    this.motors.init();
    this.motors.steppers[0].setMicrosteps(16);
    this.motors.steppers[1].setMicrosteps(16);
    this.motors.steppers[0].setCurrent(0.75);
    this.motors.steppers[1].setCurrent(0.75);
  }

  moveToOrigin() {
    let configData = this.config.getSave();

    while (configData["position"].x !== configData["origin"].x) {
      this.xSpeed("high");
      const direction =
        configData["origin"].x - configData["position"].x > 0 ? "back" : "fwd";
      this.xMotor.oneStepSync(direction);
      configData["position"].x += directionTable[direction];
      configData = this.config.setData("position", configData["position"]);
    }

    while (configData["position"].y !== configData["origin"].y) {
      this.ySpeed("high");
      const direction =
        configData["origin"].y - configData["position"].y > 0 ? "back" : "fwd";
      this.yMotor.oneStepSync(direction);
      configData["position"].y += directionTable[direction];
      configData = this.config.setData("position", configData["position"]);
    }

    this.xSpeed("low");
    this.ySpeed("low");
    this.releaseAll();
  }

  xSpeed(speed) {
    if (speed === "high") {
      this.xMotor.setStyle("interleaved");
      this.xMotor.setSpeed({ rpm: 10 });
    } else {
      this.xMotor.setStyle("microstep");
      this.xMotor.setSpeed({ rpm: 1 });
    }
  }

  ySpeed(speed) {
    if (speed === "high") {
      this.yMotor.setStyle("interleaved");
      this.yMotor.setSpeed({ rpm: 10 });
    } else {
      this.yMotor.setStyle("microstep");
      this.yMotor.setSpeed({ rpm: 1 });
    }
  }

  forwardQuick() {
    this.motors.steppers[0].setSpeed({ rpm: 10 });
    this.motors.steppers[0].setStyle("interleaved"); // Microstep ou interleaved
    this.motors.steppers[0].step("fwd", 2000, (err, res) => {
      console.log(`C'est fini : 0`);
      this.release(0);
    });
  }
  forwardSlow() {
    this.motors.steppers[1].setSpeed({ rpm: 1 });
    this.motors.steppers[1].setStyle("microstep"); // Microstep ou interleaved
    this.motors.steppers[1].step("fwd", 2000, (err, res) => {
      console.log(`C'est fini : 1`);
      this.release(1);
    });
  }

  backward() {
    this.motors.steppers[0].stepSync("back", 1000);
    this.motors.steppers[1].stepSync("back", 1000);
  }

  releaseAll() {
    this.xMotor.releaseSync();
    this.yMotor.releaseSync();
  }
}

module.exports = { Machine };
