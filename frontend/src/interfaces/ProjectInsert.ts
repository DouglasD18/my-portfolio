import { Category } from "./Category";

export interface IProjectInsert {
  urlTitle: string;
  title: string;
  image: string;
  category: Category;
  tecnologies: string[];
}
