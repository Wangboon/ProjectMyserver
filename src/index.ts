import express, { Request, Response } from 'express';
import { Utils } from "./Utils";


const app = express();
const port = 3000;



app.get('/', (req: Request, res: Response) => {

    res.send('factorial system');

});


app.get('/factorial/:number', async (req: Request, res: Response) => {

    const number = parseInt(req.params.number, 10);
    
    const result = await Utils.factorial(number);
    res.send(`Factorial of ${number} is ${result}`);

})

app.listen(port, () => {

    console.log(`Server is running ${port}`);

});