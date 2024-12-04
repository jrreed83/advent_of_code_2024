import { parse } from "jsr:@std/csv/parse";
import { unzip, mapNotNullish,zip,runningReduce } from "jsr:@std/collections";


const text = await Deno.readTextFile("input.txt");

//const col_1 = [];
//const col_2 = [];

const X = parse(text, { separator: "   "});
const [x1, x2] = unzip(X);
const col1 = mapNotNullish( x1, (x) => parseInt(x));
const col2 = mapNotNullish( x2, (x) => parseInt(x));

col1.sort();
col2.sort();

const diffs = mapNotNullish(zip(col1, col2), ([a,b]) => Math.abs(a-b));
const sums  = runningReduce(diffs, (sum, current) => sum + current, 0);
const sum   = sums[sums.length-1];

console.log(`The sum is ${sum}`);

