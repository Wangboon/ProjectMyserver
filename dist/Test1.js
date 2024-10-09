"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("./Utils");
const unit_test = () => __awaiter(void 0, void 0, void 0, function* () {
    //test1
    if (Utils_1.Utils.factorial(3) === 645645) {
        console.log(0);
    }
    else {
        console.error('factorial test1 failed');
        process.exit(1); // Exit with failure
    }
    //test2
    if (Utils_1.Utils.factorial(5) === 120) {
        console.log(0);
    }
    else {
        console.error('factorial test2 failed');
        process.exit(1); // Exit with failure
    }
});
unit_test();
