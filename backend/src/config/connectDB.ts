import mongoose from "mongoose";



const connectDB  = async () => { 
try {
    const MONGODB_URL = process.env.MONGODB_URL;

    await mongoose.connect(MONGODB_URL as string)
console.log("DATABASE CONNECTED SUCCESSFULLY")
} catch (error) {
    console.log("Some Error occur while connection")
}


}


export default connectDB