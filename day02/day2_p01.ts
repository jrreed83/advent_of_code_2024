
import { chunks } from "jsr:@std/collections"

function safe(x): number {

    if (x[1] == x[0]) {
        return 0;
    }
    const increase = (x[1]-x[0]) > 0;
    const decrease = !increase;
    for (let i=1; i<x.length-1; i++) {
        const diff = x[i+1]-x[i];

        if (diff == 0) {
            return 0;
        } else if (increase && diff < 0) {
            return 0;
        } else if (decrease && diff > 0){
            return 0;
        } else if (Math.abs(diff) > 3) {
            return 0;
        }
    }

    return 1;
}


console.log(safe([7,6,4,2,1]));
console.log(safe([1,2,7,8,9]));
console.log(safe([9,7,6,2,1]));
console.log(safe([1,3,2,4,5]));
console.log(safe([1,3,6,7,9]));