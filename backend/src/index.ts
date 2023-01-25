import express from "express";
import cors from 'cors';
import 'dotenv/config';
import { InsertProjectsFactory } from './api/factories/InsertProjects.factory';
import { GetProjectsFactory } from "./api/factories/GetProjects.factory";
import { JWTAuth } from "./utils/auth/JWT.auth";

const PORT = Number(process.env.PORT);
const app = express();

app.use(express.json());
app.use(cors());

const authorization = JWTAuth;

const insertProject = InsertProjectsFactory.make();
const getProjects = GetProjectsFactory.make();

app.post(
  "/project",
  (req, res, next) => authorization.verifyMiddleware(req, res, next),
  (req, res, next) => insertProject.insert(req, res, next)
);

app.get("/projects", (req, res, next) => getProjects.read(req, res, next));

app.listen(PORT, () => console.log("Is running!", PORT));
