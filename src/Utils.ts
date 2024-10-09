function factorial(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

export const Utils = { factorial };



//web browser (google.com) ---> (request) ---> google company server

//                 <html>... (html)  <-- (respon) -----google company server

