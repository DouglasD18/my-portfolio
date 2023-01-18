import { Project } from "../entities/Project";

export interface IProjectsRepository {
  read(): Promise<Project[]>;
}

export class ProjectsService {
  constructor(private repository: IProjectsRepository) {}

  async read(): Promise<Project[]> {
    try {
      const projects = await this.repository.read();

      return projects;
    } catch (error) {
      console.log(error);
    }
  }
}