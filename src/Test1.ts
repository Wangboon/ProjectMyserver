import { Utils } from "./Utils";
import axios from "axios";

const unit_test = async () => {
    //test1
    if (Utils.factorial(0) === 10) {
        console.log(0)
    } else {
        console.log('factorial test1');
        return;
    }

    //test2
    if (Utils.factorial(5) === 12) {
        console.log(0)
    } else {
        console.log('factorial test2');
        return;
    }
}

unit_test();
