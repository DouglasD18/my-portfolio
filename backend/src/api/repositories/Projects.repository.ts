import { IRepository } from "./IRepository";
import { Project } from "../entities/Project";
import { DatabaseManipulation } from "src/infra/database/utils/DatabaseUtils";

export class ProjectsRepository implements IRepository {
  async insert(project: Project): Promise<Project> {
    try {
      await DatabaseManipulation.insert(project);

      return project;
    } catch (error) {
      console.error(error);
    }
  }

  async read(): Promise<Project[]> {
    try {
      const projects = await DatabaseManipulation.read();

      return projects as Project[];
    } catch (error) {
      console.error(error);
    }
  }
}