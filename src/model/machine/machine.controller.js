const MotorHat = require("motor-hat");

class Machine {
  constructor(options) {
    this.motors = MotorHat(options);
    this.initialize();
  }

  initialize() {
    this.motors.init();
    this.motors.steppers[0].setMicrosteps(16);
    this.motors.steppers[1].setMicrosteps(16);
    this.motors.steppers[0].setCurrent(0.75);
    this.motors.steppers[1].setCurrent(0.75);
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

  release(i) {
    this.motors.steppers[i].release(
      (err) => !err && console.log("IT'S FREE!!")
    );
  }
}

module.exports = { Machine };
