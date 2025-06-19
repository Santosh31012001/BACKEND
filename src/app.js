import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Middlewares
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true  // Fixed capitalization
}));

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended: true, limit: "50mb"}));
app.use(express.static("public"));
app.use(cookieParser());


//routes import
import userRoute from "./routes/user.route.js";

// Routes
app.use("/api/v1/users", userRoute);

// Test route
app.get("/", (req, res) => {
    res.send("Hello world")
})

export default app;