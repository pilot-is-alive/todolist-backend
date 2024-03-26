import express from "express";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();
const PORT = process.env.PORT || 5000



app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})