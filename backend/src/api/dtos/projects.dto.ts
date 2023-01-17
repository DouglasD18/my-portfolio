import { IsArray, IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class ProjectsDTO {
  @IsMongoId({
    message: "Id must be a MongoDB ObjectId."
  })
  id: string;

  @IsNotEmpty({
    message: "URL should not be empty."
  })
  @IsString({
    message: "URL must be a string."
  })
  url: string;

  @IsNotEmpty({
    message: "Title should not be empty."
  })
  @IsString({
    message: "Title must be a string."
  })
  title: string;

  @IsNotEmpty({
    message: "Description should not be empty."
  })
  @IsString({
    message: "Description must be a string."
  })
  description: string;

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
