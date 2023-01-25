import express from "express";
import cors from 'cors';
import 'dotenv/config';

const PORT = Number(process.env.PORT);

const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log("Is running!", PORT));
