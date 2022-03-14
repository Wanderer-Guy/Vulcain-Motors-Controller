const fs = require("fs");

class Save {
  constructor(name) {
    this.name = name;
    this.path = `./src/resources/${name}.json`;
  }

  getSave() {
    if (!fs.existsSync(this.path)) {
      return false;
    }

    const data = fs.readFileSync(this.path, {
      encoding: "utf8",
      flag: "r",
    });

    return JSON.parse(data);
  }

  initialize(template = {}) {
    if (fs.existsSync(this.path)) {
      return false;
    }

    fs.appendFileSync(this.path, JSON.stringify(template), {
      encoding: "utf8",
    });
    return true;
  }
}

module.exports = { Save };
