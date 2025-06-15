import 'dotenv/config'
import connectDB from "./db/index.js";
import express from 'express';


const app = express();

connectDB()
.then(()=>{
    app.listen(process.env.PORT ||8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
    console.log('MongoDB connection successfully');
}
).catch((error) => {
    console.error(' MongoDB connection faild!!!', error);
    process.exit(1); // Exit the process with failure
})



// SECOND METHODE TO CONNECT TO MONGODB

// // require('dotenv').config({path: './.env'});
// import dotenv from "dotenv";
// import connectDB from './db/index.js';


// dotenv.config({ path: './.env' });

// connectDB();




// FIRST METHODE TO CONNECT TO MONGODB

// import mongoose from 'mongoose';
// import { DB_NAME } from './constants';
// import express from 'express';
// const app = express();

// ( async () => {
//     try {
//         await mongoose.connect(`${`process.env.MONGODB_URI`}/${DB_NAME}`)
//         app.on('error', (err) => {
//             console.error('Server error:', err);
//             throw err;
//         });
//         app.listen(3000, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });
        
//     } catch (error) {
//         console.error('Error connecting to the database:', error);
//         throw error;   
//     }
// })()