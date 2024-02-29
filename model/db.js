import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectionString = process.env.MONGO_DB_CONNECTION_STRING
try{
    mongoose.connect(connectionString);
    console.log("Connected to MongoDB");

}catch(err){
    console.log(err);
}

