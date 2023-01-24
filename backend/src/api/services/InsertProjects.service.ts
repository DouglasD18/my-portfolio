import { Category, Project } from "../entities/Project";
import { GitHubApi } from '../../utils/github-api/get.github-api';
import { IRepository } from "../repositories/IRepository";
import { ProjectsDTO } from "src/infra/dtos/projects.dto";

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

  async insert(body: ProjectsDTO): Promise<void> {
    const { title, image, tecnologies } = body;

    const allProjects = await this.repository.read();
    const exists = allProjects.some((value: Project) => value.getTitle === title);

    if (exists) {
      throw new Error("ENTITY_ALREADY_EXISTS");
    }

    try {
      const infos = await this.GetUrlAndDescription(title);
      const { url, description } = infos;
      const category = Category[body.category];

      const project = new Project(
        title,
        url,
        description,
        image,
        category,
        tecnologies
      );

      await this.repository.insert(project);
    } catch (error) {
      console.error(error)
    }
  }
}
