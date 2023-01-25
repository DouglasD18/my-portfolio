import { ProjecstReadController } from "src/infra/controllers/ProjectsRead.controller";
import { ProjectsRepository } from "../repositories/Projects.repository";
import { GetProjectsService } from "../services/GetProjects.service";

export class GetProjectsFactory {
  static make() {
    const repository = new ProjectsRepository();
    const service = new GetProjectsService(repository);
    const controller = new ProjecstReadController(service);

    return controller;
  }
}