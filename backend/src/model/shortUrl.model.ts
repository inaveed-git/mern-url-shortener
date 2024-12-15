
import mongoose from "mongoose";
import { nanoid } from "nanoid";


const shortURLSchema = new mongoose.Schema({

fullURL: { 
   type: String , 
   required: true , 
   unique: true
} , 
shortURL :{ 
type: String, 
default: () => nanoid().substring(0 , 10)
} , 
clicks: {
    type: Number , 
    default: 0
}


} , {timestamps: true})


const ShortURL = mongoose.model("ShortURL" , shortURLSchema) ; 


export default ShortURL ; 



