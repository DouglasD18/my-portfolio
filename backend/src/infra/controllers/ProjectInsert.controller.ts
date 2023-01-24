import { Project } from "src/api/entities/Project";
import { ProjectsDTO } from "../dtos/projects.dto";
import { NextFunction, Request, Response } from "express";

export interface IInsertService {
  insert(body: ProjectsDTO): Promise<void>;
}

export class ProjectInsertController {
  constructor(private service: IInsertService) {}

  async insert(req: Request, res:Response, next: NextFunction) {
    const project: ProjectsDTO = req.body;

    try {
      await this.service.insert(project);

      res.status(201).json(project);
    } catch (error) {
      console.error(error);
      next();
    }
  }
}