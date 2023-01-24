import { IProject } from "src/infra/database/seeds/projects.seed";

export interface IReadProjectsRepository {
  read(): Promise<IProject[]>;
}

export class GetProjectsService {
  constructor(private repository: IReadProjectsRepository) {}

  async read(): Promise<IProject[]> {
    try {
      const projects = await this.repository.read();

      return projects;
    } catch (error) {
      console.log(error);
    }
  }
}