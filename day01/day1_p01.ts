import { parse } from "jsr:@std/csv/parse";
import { assertEquals } from "jsr:@std/assert";
import { sortBy } from "jsr:@std/collections/sort-by";


const text = await Deno.readTextFile("input.txt");

const col_1 = [];
const col_2 = [];
const X = parse(text, { separator: "   "});

for (let i=0; i<X.length; i++) {
    col_1.push(parseInt(X[i][0]));
    col_2.push(parseInt(X[i][1]));
}

col_1.sort();
col_2.sort();

let sum = 0;

for (let i=0; i<col_1.length; i++) {
    sum += Math.abs(col_1[i]-col_2[i]);    
}

console.log(`The sum is ${sum}`);
/*
const string = "a,b,c\nd,e,f";

assertEquals(parse(string, { skipFirstRow: false }), [["a", "b", "c"], ["d", "e", "f"]]);
assertEquals(parse(string, { skipFirstRow: true }), [{ a: "d", b: "e", c: "f" }]);
assertEquals(parse(string, { columns: ["x", "y", "z"] }), [{ x: "a", y: "b", z: "c" }, { x: "d", y: "e", z: "f" }]);

console.log("Complete\n");
*
