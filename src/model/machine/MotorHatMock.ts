module.exports = function MotorHat(options: MotorHatOptions) {
  const steppers: Object[] = [];

  const init = () => {
    for (const stepper of options.steppers) {
      steppers.push(new Motor(stepper));
    }
  };

  return { init, steppers };
};

class Motor {
  options: StepperOptions;

  constructor(options: StepperOptions) {
    this.options = options;
  }

  setMicrosteps() {
    void 0;
  }

  setCurrent() {
    void 0;
  }
  setStyle() {
    void 0;
  }
  setSpeed() {
    void 0;
  }
  releaseSync() {
    void 0;
  }
  oneStepSync() {
    void 0;
  }
}
