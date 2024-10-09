import { Utils } from "./Utils";


const unit_test = async () => {
    //test1
    if (Utils.factorial(7) === 5040) {
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
