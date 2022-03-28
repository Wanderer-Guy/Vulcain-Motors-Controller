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

  setMicrosteps(args: any) {
    console.log('setMicrosteps arguments ->', args);
    void 0;
  }

  setCurrent(args: any) {
    console.log('setCurrent arguments ->', args);
    void 0;
  }
  setStyle(args: any) {
    console.log('setStyle arguments ->', args);
    void 0;
  }
  setSpeed(args: any) {
    console.log('setSpeed arguments ->', args);
    void 0;
  }
  releaseSync(args: any) {
    console.log('releaseSync arguments ->', args);
    void 0;
  }
  oneStepSync(args: any) {
    console.log('oneStepSync arguments ->', args);
    void 0;
  }
}
