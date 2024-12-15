


import express from "express";
import { createShortURL, getURL , getAllURLs , deleteURL , updateShortUrl} from "../controller/shortUrl.controller";


let shortRouter = express.Router();



shortRouter.post("/add/shortURL" , createShortURL)
shortRouter.get('/get/shortURL/:id', getURL);
shortRouter.get("/get/shorURLs" , getAllURLs)
shortRouter.put("/update/shortURL/:id" , updateShortUrl)
shortRouter.delete("/delete/shortURL/:id" , deleteURL)




export default shortRouter