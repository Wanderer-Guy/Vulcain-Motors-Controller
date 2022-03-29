import GCodeLine from "../gcode-line.abstract";

class Circle extends GCodeLine {

  constructor(command: string[]) {
    super();
    console.log(`It is a Circle with these values : ${command.join(",")}`);
  }

  playLine(motorController : any) {
    console.log("Circle")
  }
};

export default Circle;
