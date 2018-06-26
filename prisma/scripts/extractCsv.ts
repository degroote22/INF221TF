import * as fs from "fs";

const file = fs.readFileSync("./optativas.csv", "utf-8");

const lines = file.split("\r\n");

const useful = lines.filter(x => x !== "").filter(x => x !== "\r");

interface K {
  cod: string;
  name: string;
}

let flip = true;
const data = useful.reduce(
  (prev: K[], curr: string) => {
    if (flip) {
      const newItem = {
        cod: curr,
        name: ""
      };
      flip = false;
      return [newItem, ...prev];
    } else {
      const [thisItem, ...rest] = [...prev];
      const newItem = {
        ...thisItem,
        name: curr
      };
      flip = true;
      return [newItem, ...rest];
    }
  },
  [] as K[]
);

console.log(data);
