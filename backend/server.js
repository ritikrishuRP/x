import express from "express";
import cookieParser from "cookie-parser"
import events from "events"


import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js"

import connectMongoDB from "./db/connectMongoDB.js";





// Increase the default limit for all EventEmitter instances
events.EventEmitter.defaultMaxListeners = 20;

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());    //to parse body data
app.use(express.urlencoded({extended: true})); //to parse data from url
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);

app.listen(8000, ()=>{
    console.log("Server is running on port 8000");
    connectMongoDB();
})

