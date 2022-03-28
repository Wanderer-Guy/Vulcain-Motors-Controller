module.exports = class GCodeLine {

  constructor() {
    
  }

  playLine(_motorController : any) {
    throw new Error('You must implement this function');
  }
};
