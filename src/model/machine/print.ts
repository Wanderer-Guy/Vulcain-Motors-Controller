const Circle = require("../gcode-line/gcode-type/circle");

module.exports = class Print {
  gcode: string[]; 
  index: number = 0;
  latestCommand: string = "";

  constructor(gcode: string) {
    this.gcode = gcode.split("\n");
    
  }

  startPrint() {
    let line;
    let currentCommand;

    while(this.index < this.gcode.length) {
      line = this.__nextLine();
      currentCommand = this.__gcodeRouter(line.split(" "));
      //currentCommand.playLine("");
    }
  }

  private __gcodeRouter(splittedLine: string[]): any {
    switch(splittedLine[0]) {
      case "G2":
        this.latestCommand = "G2";
        return new Circle(splittedLine);
      default:
        if(this.latestCommand !== "") {
          console.log("We reuse the last command known");
          splittedLine.unshift(this.latestCommand);
          return this.__gcodeRouter(splittedLine);
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
