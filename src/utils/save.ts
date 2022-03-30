import { Data, SaveInterface } from "../interfaces/save";

const fs = require('fs');

const RESOURCES_FOLDER = './src/resources';
const DEFAULT_DATA: Data = {
  origin: { x: 0, y: 0, z: 0 },
  position: { x: 0, y: 0, z: 0 },
  xSize: 0,
  ySize: 0,
};
class Save implements SaveInterface {
  name: string;
  path: string;
  data: Data;

  constructor(name: string, template: Data = DEFAULT_DATA) {
    this.name = name;
    this.path = `${RESOURCES_FOLDER}/${name}.json`;
    if (!fs.existsSync(RESOURCES_FOLDER)) {
      fs.mkdirSync(RESOURCES_FOLDER);
    }

    if (!fs.existsSync(this.path)) {
      fs.appendFileSync(this.path, JSON.stringify(template), {
        encoding: 'utf8',
      });
      this.data = template;
    } else {
      this.data = JSON.parse(
        fs.readFileSync(this.path, {
          encoding: 'utf8',
          flag: 'r',
        })
      );
    }
  }

  getSave(): Data {
    return this.data;
  }

  setData(key: keyof Data, value: any): Data {
    this.data[key] = value;
    fs.writeFileSync(this.path, JSON.stringify(this.data));
    return this.data;
  }
};

export default Save;