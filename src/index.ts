import { Option, some } from "fp-ts/Option";
import { readFile } from "./utils";

const str: Option<String> = some("sdf");

console.log(str);
console.log("Line 7", readFile("hello.txt"));
