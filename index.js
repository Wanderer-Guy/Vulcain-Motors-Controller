const { Machine } = require("./src/model/machine/machine.controller");
const { Save } = require("./src/utils/save");

/*const motorization = new Machine({
  adress: 0x6f,
  steppers: [
    { W1: "M1", W2: "M2" },
    { W1: "M3", W2: "M4" },
  ],
});

motorization.forwardQuick();
motorization.forwardSlow();*/

const testSave = new Save("testSave2");

console.log(testSave.initialize({ test: "lol2" }));
console.log(testSave.getSave());
