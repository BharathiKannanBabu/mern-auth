import express from "express";
import connectMongoDB from "./db/connectMongoDB.js";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js"
import authRoutes from "./routes/auth.routes.js"
dotenv.config();

const app = express();

app.listen(3000, () => {
    console.log('Server is listening to the post is 3000');
    connectMongoDB();
})
app.use(express.json())

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      message,
      statusCode,
    });
});