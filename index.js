const { Motorization } = require("./src/model/motorization.controller");

const motorization = new Motorization({
  adress: 0x6f,
  steppers: [
    { W1: "M1", W2: "M2" },
    { W1: "M3", W2: "M4" },
  ],
});

motorization.forwardQuick();
motorization.forwardSlow();
