import express from "express";
import authRoutes from "./routes/auth.routes.js"
import connectMongoDB from "./db/connectMongoDB.js";

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use("/api/auth",authRoutes);

app.listen(8000, ()=>{
    console.log("Server is running on port 8000");
    connectMongoDB();
})

