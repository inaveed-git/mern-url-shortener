import express from "express"
import cors from 'cors';



const  app = express();

app.use(express.json());
// app.use(express.urlencoded({extended: true}))

app.use(cors(

 {
    origin: 'http://localhost:5173', // React app's origin , 
   credentials: true
 }

))


// importing the routers

import shortRouter from "./routes/shortUrl.rotue";



app.use("/api" , shortRouter)








export default  app ; 


