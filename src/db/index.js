import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const connectDB = async () => {
    try {
      const connectionInstance  = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
          console.log(
           `\n MongoDB CONNECTED !! DB HOST:${connectionInstance.connection.host}`);
            console.log('Connected to the MONGODB database successfully');
    } catch (error) {
        console.error('Error connecting to the  MONGODB database:', error);
        process.exit(1); // Exit the process with failure
    }
}
export default connectDB;