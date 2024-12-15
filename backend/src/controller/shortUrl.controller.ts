
import { Request , Response } from "express"
import ShortURL from "../model/shortUrl.model";


export const createShortURL = async (req: Request , res: Response) => { 
                   
    try {
        let {fullURL} = req.body ; 

let urlFound = await ShortURL.findOne({fullURL});

if(urlFound){
    res.status(409).json({
        sucess: false , 
        message: "url already existed" ,
        urlFound
    })
}

let newShortUrl = await ShortURL.create({
    fullURL , 
    
})


res.status(201).json({
    sucess: true , 
    message: "ShortURL created" , 
    newShortUrl
})
    } catch (error) {
        console.log("Some error occur while creating:" + error)
    }
    


}

// Get full URL by short URL
export const getURL = async (req: Request, res: Response) => {
    try {
      const { id: shortURL } = req.params; // Correctly extract the parameter
      const isFound = await ShortURL.findOne({ shortURL });
  
      if (!isFound) {
         res.status(404).json({
          success: false,
          message: "URL not found",
        });
      }else{
        
      // Increment the click count and save
      isFound.clicks++;
      await isFound.save();
  
      // Redirect to the original URL
      res.redirect(isFound.fullURL);
      }
  
    } catch (error) {
      console.error("Error while retrieving URL:", error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  };




  export const getAllURLs = async (req: Request ,res: Response) => { 
      
    

    try {
        
        let allURLs =await ShortURL.find()
if( allURLs.length > 0){
    res.status(200).json({
        success: true , 
        message: "All the urls" , 
        allURLs
    })
}




    } catch (error) {
        res.status(404).json({
    success: false , 
    message: "no url found" , 

        })
    }
  }


  export const deleteURL = async (req: Request, res: Response) => {
    try {
        const { id: _id } = req.params; // Correctly extract the parameter
        const isFound = await ShortURL.findByIdAndDelete({ _id });
    
        if (isFound) {
           res.status(200).json({
            success: true,
            message: "URL Delete successfully",
          });
        }
      
      } catch (error) {
        console.error("Error while retrieving URL:", error);
        res.status(500).json({
          success: false,
          message: "Internal server error",
        });
      }
  };




  // Update a URL by ID
export const updateShortUrl = async (req:Request, res:Response) => {
  const { id } = req.params; // Extract the ID from request parameters
  const { fullURL, shortURL } = req.body; // Extract the updated data from request body

  try {
    // Validate the incoming data
    if (!fullURL || !shortURL) {
       res.status(400).json({ message: 'Full URL and Short URL are required.' });
    }

    // Use `set` to update fields and `new: true` to return the updated document
    const updatedUrl = await ShortURL.findByIdAndUpdate(
      id,
      {
        $set: { fullURL, shortURL, updatedAt: new Date() }, // Use `$set` to define updated fields
      },
      { new: true, runValidators: true } // Return the updated document and run schema validators
    );

    if (!updatedUrl) {
       res.status(404).json({ message: 'URL not found.' });
    }

    res.status(200).json({ message: 'URL updated successfully!', updatedUrl });
  } catch (error) {
    console.error('Error updating URL:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};