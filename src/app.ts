import express from "express";
import { configDotenv } from "dotenv";
import userRouter from "./routes/userRoutes";

configDotenv({path: '../.env'});

const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use('/api', userRouter);

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})