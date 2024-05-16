// use mongoose for connecting databases
import mongoose from "mongoose";

//METHOD 2 (MORE PREFFERED)

// we need database name
import {DB_NAME} from "../constants.js";

//connecting database

const connectDB = async () => {
    try {
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) // connecting 2 instance i.e uri of DB and nmae of DB
      console.log(`\n MongoDB connected !! DB host : ${connectionInstance.connection.host}`) // logging out the connection instance
      // there exit many coneection like different for production diffrent for app to get a check of which connection we are at we use this syntax (connectionInstance.connection.host)

    } catch (error) {
        console.log("MongoDb connection error",error);
        process.exit(1) // process.exit is a func given by node so we need not to import it accodingly we can exit if u encounter error
    }
}

export default connectDB // writing this we need not to write this code in the index src file rather just import it