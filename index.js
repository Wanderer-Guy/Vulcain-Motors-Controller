const { Machine } = require("./src/model/machine/engine.controller");

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

const values = [
  { x: 1, y: 0 },
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 3, y: 3 },
  { x: 4, y: 4 },
  { x: 5, y: 5 },
  { x: 6, y: 6 },
  { x: 7, y: 7 },
  { x: 8, y: 8 },
  { x: 9, y: 9 },
  { x: 10, y: 10 },
  { x: 11, y: 11 },
  { x: 12, y: 12 },
  { x: 13, y: 13 },
  { x: 14, y: 14 },
  { x: 15, y: 15 },
  { x: 16, y: 16 },
  { x: 17, y: 17 },
  { x: 18, y: 18 },
  { x: 19, y: 19 },
  { x: 20, y: 20 },
  { x: 21, y: 21 },
  { x: 22, y: 22 },
  { x: 23, y: 23 },
  { x: 24, y: 24 },
  { x: 25, y: 25 },
  { x: 26, y: 26 },
  { x: 27, y: 27 },
  { x: 28, y: 28 },
  { x: 29, y: 29 },
  { x: 30, y: 30 },
];

for (const iterator of values) {
  motorization.moveToQuickly(iterator);
}

motorization.releaseAll();
