import { IProject } from "src/infra/database/seeds/projects.seed";
import { Category, Project } from "../entities/Project";
import { IReadProjectsRepository } from './GetProjects.service';
import { GitHubApi } from '../../utils/github-api/get.github-api';

export interface IProjectsRepository extends IReadProjectsRepository {
  insert(project: InsertProject): Promise<IProject>;
}

interface InsertProject {
  title: string;
  image: string;
  category: Category;
  tecnologies: string[];
}

export class InsertProjectsService {
  constructor(private repository: IProjectsRepository) {}

  private async GetUrlAndDescription(title: string): Promise<{ url: string; description: string }> {
    try {
      const infos = await GitHubApi.get(title);

      return infos;
    } catch (error) {
      console.error(error)
    }
  }

  async insert(body: InsertProject): Promise<Project> {
    const { title, image, category, tecnologies } = body;

    const allProjects = await this.repository.read();
    const exists = allProjects.some((value: IProject) => value.title === title);

    if (exists) {
      throw new Error("ENTITY_ALREADY_EXISTS");
    }

    try {
      const infos = await this.GetUrlAndDescription(title);
      const { url, description } = infos;

      const project = new Project(
        title,
        url,
        description,
        image,
        category,
        tecnologies
      );

      return project;
    } catch (error) {
      console.error(error)
    }
  }
}
