module.exports = class Line extends GCodeLine {

  constructor() {
    super();
  }

  playLine(_motorController : any) {
    console.log("Line")
  }
};
