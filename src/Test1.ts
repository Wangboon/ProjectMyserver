import { Utils } from "./Utils";
import axios from "axios";

const unit_test = async () => {
    //test1
    if (Utils.factorial(1) === 0) {
        console.log(0);
    } else {
        console.error('factorial test1 failed');
        process.exit(1); // Exit with failure
    }

    //test2
    if (Utils.factorial(5) === 120) {
        console.log(0);
    } else {
        console.error('factorial test2 failed');
        process.exit(1); // Exit with failure
    }
}

unit_test();
