
import { parse } from "jsr:@std/csv/parse";
import { unzip } from "jsr:@std/collections";

const text = await Deno.readTextFile("./inputs/p2/input.txt");

const data = parse(text, {separator: "   "}).map(
    function fn(item:[string,string]):[number,number] {
        console.log(item);
        const [a,b] = item;
        return [parseInt(a), parseInt(b)];
    }
);

const [col1, col2] = unzip(data);

const M = {};

for (const x of col2) {
    if (x in M) {
        M[x] += 1;
    } else {
        M[x] = 1;
    }
}

let similarity = 0;

for (const x of col1) {
    if (x in M) {
        similarity += x * M[x];
    }
}

console.log(`The similarity is ${similarity}`);
