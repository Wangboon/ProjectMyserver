import { Utils } from "./Utils";
import axios from "axios";

const unit_test = async () => {
    //test1
    if (Utils.add(1, 2) === 3) {
        console.log(0)
    } else {
        console.log('add test1')
        return;
    }
    8
    //test2
    if (Utils.add(2, 3) === 5) {
        console.log(0)
    } else {
        console.log('add test2')
        return;
    }



}

unit_test();