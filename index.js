const { Machine } = require("./src/model/machine/machine.controller");

const motorization = new Machine(
  {
    adress: 0x6f,
    steppers: [
      { W1: "M1", W2: "M2" },
      { W1: "M3", W2: "M4" },
    ],
  },
  1000,
  1000
);
