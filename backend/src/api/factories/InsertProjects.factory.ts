import { ProjectInsertController } from "src/infra/controllers/ProjectInsert.controller";
import { ProjectsRepository } from "../repositories/Projects.repository";
import { InsertProjectsService } from "../services/InsertProjects.service";

export class InsertProjectsFactory {
  static make() {
    const repository = new ProjectsRepository();
    const service = new InsertProjectsService(repository);
    const controller = new ProjectInsertController(service);

    return controller;
  }
}