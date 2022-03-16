const fs = require("fs");

class Save {
  constructor(name, template = {}) {
    this.name = name;
    this.path = `./src/resources/${name}.json`;
    if (!fs.existsSync(this.path)) {
      fs.appendFileSync(this.path, JSON.stringify(template), {
        encoding: "utf8",
      });
      this.data = template;
    } else {
      this.data = JSON.parse(
        fs.readFileSync(this.path, {
          encoding: "utf8",
          flag: "r",
        })
      );
    }
  }

  getSave() {
    return this.data;
  }

  setData(key, value) {
    this.data[key] = value;
    fs.writeFileSync(this.path, JSON.stringify(this.data));
    return this.data;
  }
}

module.exports = { Save };
