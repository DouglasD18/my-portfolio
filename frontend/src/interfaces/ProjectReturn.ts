import { Category } from "./Category";

export interface IProjectReturn {
  title: string;
  description: string;
  url: string;
  image: string;
  category: Category;
  tecnologies: string[];
}
