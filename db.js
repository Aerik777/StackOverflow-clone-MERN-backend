import * as dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

if(!MONGO_URL) {
    throw new Error('MONGO_URL is not defined in enviromment variables');
}

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
    dbName:process.env.DB_NAME || '',
})
.then(() => {
    console.log('Mongoose connected Sucessfully');  
}).catch((err) => {
    console.log('Mongoose connection error', err);
});