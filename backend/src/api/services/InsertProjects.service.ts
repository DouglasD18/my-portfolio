import { Category, Project } from "../entities/Project";
import { GitHubApi } from '../../utils/github-api/get.github-api';
import { IRepository } from "../repositories/IRepository";

export interface InsertProject {
  title: string;
  image: string;
  category: Category;
  tecnologies: string[];
}

export class InsertProjectsService {
  constructor(private repository: IRepository) {}

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
    const exists = allProjects.some((value: Project) => value.getTitle === title);

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

      await this.repository.insert(project);

      return project;
    } catch (error) {
      console.error(error)
    }
  }
}
