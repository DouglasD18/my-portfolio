import { IRepository } from "../repositories/IRepository";
import { Project } from "../entities/Project";

export class GetProjectsService {
  constructor(private repository: IRepository) {}

  async read(): Promise<Project[]> {
    try {
      const projects = await this.repository.read();

      return projects;
    } catch (error) {
      console.log(error);
    }
  }
}