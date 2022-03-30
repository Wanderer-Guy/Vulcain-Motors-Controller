import Circle from "../gcode-line/gcode-type/circle";

 class Print {
  gcode: string[]; 
  index: number = 0;
  latestCommand: string = "";

  constructor(gcode: string) {
    this.gcode = gcode.split("\n");
    
  }

  startPrint(motorController: any) {
    let line;
    let currentCommand;

    while(this.index < this.gcode.length) {
      line = this.__nextLine();
      currentCommand = this.__gcodeRouter(line.split(" "),motorController);
      //currentCommand.playLine("");
    }
  }

  private __gcodeRouter(splittedLine: string[], motorController:any): any {
    switch(splittedLine[0]) {
      case "G2":
        this.latestCommand = "G2";
        const c = new Circle(splittedLine);
        c.playLine(motorController)
        return c;
      default:
        if(this.latestCommand !== "") {
          console.log("We reuse the last command known");
          splittedLine.unshift(this.latestCommand);
          return this.__gcodeRouter(splittedLine, motorController);
        } else {
          console.log("Unknown command");
        }
    }
  }

  private __nextLine(): string{
    const line = this.gcode[this.index];
    this.index++;
    return line;
  }

}

export default Print;