import { Position } from "../../../interfaces/save";
import GCodeLine from "../gcode-line.abstract";

class Circle extends GCodeLine {
  command:string[];

  constructor(command: string[]) {
    super();
    this.command = command;
    console.log(`It is a Circle with these values : ${command.join(",")}`);
  }

  getCoordinates(initialPosition: Position): Position {
    const coor: Position = {x: initialPosition.x, y: initialPosition.y, z:initialPosition.z}
    for (const element of this.command) {
      const indicator = element.substring(0,1);
      if(indicator === 'X'){
        coor['x'] = Number.parseFloat(element.substring(1));
      }
      if(indicator === 'Y'){
        coor['y'] = Number.parseFloat(element.substring(1));
      }
      if(indicator === 'Z'){
        coor['z'] = Number.parseFloat(element.substring(1));
      }
    }

    return coor;
  }

  playLine(motorController : any) {
    const currentPosition = motorController.getPosition();
    console.log("Command list :",this.getCoordinates(currentPosition));
    console.log("Position :",currentPosition);
  }
};

export default Circle;
