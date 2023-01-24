import { writeFile, readFile } from "fs/promises";
import { Project } from "src/api/entities/Project";

export class DatabaseManipulation {
  static async read(): Promise<Project[] | void> {
    const data = await readFile("src/infra/database/projects.json", { encoding: "utf-8" });

    if (data) {
      const projects = JSON.parse(data);

      return projects as Project[];
    }
  }

  static async insert(project: Project): Promise<void> {
    const projects = await this.read();
    if (projects) {
      projects.push(project);

      await writeFile("src/infra/database/projects.json", JSON.stringify(projects), { encoding: "utf-8" });
    } else {
      await writeFile("src/infra/database/projects.json", JSON.stringify([project]), { encoding: "utf-8" });
    }
  }
}
