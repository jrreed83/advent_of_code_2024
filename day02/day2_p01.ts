


const count = Deno.readTextFileSync(Deno.args[0]).split("\n").map( 
    function line_to_array(line:string): number[] {
        return line.split(" ").map( (str:string) => Number(str))
    }
).map(
    function is_array_safe(arr: number[]): number {
        if (arr.length == 1) {
            return 0;
        }

        // Determine right away if the array is safe or not
        const increasing_seq = (arr[1]-arr[0]) > 0;

        for (let i=0; i<arr.length-1; i++) {

            const diff = arr[i+1]-arr[i];

            if (increasing_seq && diff < 0) {
                return 0;
            } else if (!increasing_seq && diff > 0) {
                return 0;
            } else if (diff === 0 || (Math.abs(diff) > 3)) {
                return 0;
            } 

        }
        // Passed the constraints, array is safe
        return 1;
    }
).reduce(
    function fn(prev: number, curr: number): number {
        return prev+curr;
    },
    0
);

console.log(`The number of save lines is ${count}`);

