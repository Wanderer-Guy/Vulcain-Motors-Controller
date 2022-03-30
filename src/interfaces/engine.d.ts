interface StepperOptions {
  W1: string;
  W2: string;
}

interface MotorHatOptions {
  adress: number;
  steppers: StepperOptions[];
}

export {MotorHatOptions, StepperOptions}