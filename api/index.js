import express from "express";
import connectMongoDB from "./db/connectMongoDB.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.listen(3000, () => {
    console.log('Server is listening to the post is 3000');
    connectMongoDB();
})