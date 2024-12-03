import { parse } from "jsr:@std/csv/parse";


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

