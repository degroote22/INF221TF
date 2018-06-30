"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const file = fs.readFileSync("./optativas.csv", "utf-8");
const lines = file.split("\r\n");
const useful = lines.filter(x => x !== "").filter(x => x !== "\r");
let flip = true;
const data = useful.reduce((prev, curr) => {
    if (flip) {
        const newItem = {
            cod: curr,
            name: ""
        };
        flip = false;
        return [newItem, ...prev];
    }
    else {
        const [thisItem, ...rest] = [...prev];
        const newItem = Object.assign({}, thisItem, { name: curr });
        flip = true;
        return [newItem, ...rest];
    }
}, []);
console.log(data);
