import { NextFunction, Request, Response } from "express";
import { Project } from "src/api/entities/Project";

export interface IReadService {
  read(): Promise<Project[]>
}

export class ProjecstReadController {
  constructor(private service: IReadService) {}

  async read(_req: Request, res: Response, next: NextFunction) {
    try {
      const projects = await this.service.read();

      res.status(200).json(projects);
    } catch (error) {
      console.error(error);
      next();
    }
  }
}