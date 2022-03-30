
import Engine from "./src/model/machine/engine.controller";

const motorization = new Engine(
  {
    adress: 0x6f,
    steppers: [
      { W1: 'M1', W2: 'M2' },
      { W1: 'M3', W2: 'M4' },
    ],
  },
  1000,
  1000
);

/*

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
*/

import Print from "./src/model/machine/print";


const gcodeString = "G0 G49 G40  G17 G80 G50 G90\n" + 
                    "M6 T0(TOOL DIA.0.75)\n" + 
                    "G64\n" +
                    "G20 (Inch)\n" +
                    "M04 S0\n" +
                    "G00 G43 H0  Z0.1\n" +
                    "X0 Y0\n" +
                    "G01 Z-0.25 F1\n" +
                    "G2 Y0 X0.15 R0.075 F30\n" +
                    "X1.125 Y0 R1.125\n" +
                    "Y-0.375 X0.75 R0.37\n" +
                    "M5 M9\n" +
                    "M30\n"

const testPrint = new Print(gcodeString);

testPrint.startPrint(motorization);
