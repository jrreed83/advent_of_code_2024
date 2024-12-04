import { parse } from "jsr:@std/csv/parse";
import { unzip, zip } from "jsr:@std/collections";

const filepath = Deno.args[0];
const text = await Deno.readTextFile(filepath);

// Need a better way of defining the seperator ...
const X = parse(text, { separator: "   "}).map(
    function fn(x:[string, string]):[number,number] {
        return [parseInt(x[0]), parseInt(x[1])];
    }
);

const [col1, col2] = unzip(X);

col1.sort();
col2.sort();

const sum = zip(col1, col2).reduce(
    function fn(accum: number, pair: [number, number]) {
        return accum + Math.abs(pair[0]-pair[1]);
    },
    0.0
);

console.log(`The sum is ${sum}`);

