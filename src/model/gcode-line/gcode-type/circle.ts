const GCodeLine = require("../gcode-line.abstract");

module.exports = class Circle extends GCodeLine {

  constructor(command: string[]) {
    super();
    console.log(`It is a Circle with these values : ${command.join(",")}`);
  }

  playLine(motorController : any) {
    console.log("Circle")
  }
};
