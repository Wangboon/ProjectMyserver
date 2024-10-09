"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
exports.Utils = { factorial };
//web browser (google.com) ---> (request) ---> google company server
//                 <html>... (html)  <-- (respon) -----google company server
