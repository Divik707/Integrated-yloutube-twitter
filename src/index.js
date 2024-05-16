import dotenv from "dotenv"
import connectDB from "./db/index.js";
const app = express()

dotnev.config({
    path: './env'
})

// database connection

connectDB()























/*
//connecting databases use of iffi ()() i.e we define and call the function in the same line
;( async () =>{ // using asyn method coz db is in another continent and can be time consuming so we use async method
    try {
        // use try catch method in order to avoid errors
       await mongoose.connect(`${process.env.MONGODB_URI}`)
       app.on("errors",(error) => {//app.on is a listner and a part of express when express is not able to listen the requests 
        console.log("ERROR ", error );
        throw error
       })

       app.listen(process.env.PORT , ( ) =>{
        console.log(`App is listening on port ${process.env.PORT}`);
       })

    } catch (error) {
        console.error("ERROR",error)
        throw err
    }
})() // for cleaning process we use ; 

*/
