import { IsArray, IsNotEmpty, IsString } from "class-validator";

export class ProjectsDTO {
  @IsNotEmpty({
    message: "Title should not be empty."
  })
  @IsString({
    message: "Title must be a string."
  })
  urlTitle: string;

  @IsNotEmpty({
    message: "Title should not be empty."
  })
  @IsString({
    message: "Title must be a string."
  })
  title: string;

  @IsNotEmpty({
    message: "Image should not be empty."
  })
  @IsString({
    message: "Image must be a string."
  })
  image: string;

  @IsString({
    groups: ["backend", "frontend", "fullstack"],
    message: "Must have a valid category!"
  })
  @IsNotEmpty({
    message: "Category should not be empty."
  })
  category: "backend" | "frontend" | "fullstack";

  @IsNotEmpty({
    message: "Tecnologies should not be empty."
  })
  @IsArray({
    message: "Tecnologies must be a array of strings."
  })
  tecnologies: string[];
}
