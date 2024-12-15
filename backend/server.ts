
import { Console } from "console";
import app from "./src/app"
import dotenv from "dotenv"
import connectDB from "./src/config/connectDB";
dotenv.config()



const startServer = async () => { 


await connectDB()

    const PORT = process.env.PORT ; 


    app.listen(PORT , ()=> { 
      console.log(`Server is connected to ${PORT}`)
    })
}

startServer()