import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    Credentials: true
}));
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended: true, limit: "50mb"}));
app.use(express.static("public"));
app.use(cookieParser());


app.get("/",(req , res)=>{
    res.send("hello word")
})
//routes import
import userRoute from "./routes/user.route.js";

 

//routes declaration
app.use("/api/v1/users", userRoute);




export {app}