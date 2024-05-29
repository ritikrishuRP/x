import express from "express";
import cookieParser from "cookie-parser"
import events from "events";
import dotenv from 'dotenv';
import {v2 as cloudinary} from "cloudinary";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";
import notificationRoutes from "./routes/notification.routes.js"

import connectMongoDB from "./db/connectMongoDB.js";


// Increase the default limit for all EventEmitter instances
events.EventEmitter.defaultMaxListeners = 20;


dotenv.config();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());    //to parse body data
app.use(express.urlencoded({extended: true})); //to parse data from url
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/posts",postRoutes);
app.use("/api/notifications",notificationRoutes);

app.listen(8000, ()=>{
    console.log("Server is running on port 8000");
    connectMongoDB();
})

