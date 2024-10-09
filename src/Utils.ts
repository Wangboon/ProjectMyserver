import axios from "axios";


function add(a:number,b:number)
{
    return a + b;
}



export const Utils = { add }



//web browser (google.com) ---> (request) ---> google company server

//                 <html>... (html)  <-- (respon) -----google company server

