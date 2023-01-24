import { Project } from "../entities/Project";

export abstract class IRepository {
  abstract insert(project: Project): Promise<Project>;

  abstract read(): Promise<Project[]>;
}
