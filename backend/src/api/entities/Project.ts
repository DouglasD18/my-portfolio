export enum Category {
  fullstack = "fullstack",
  back = "backend",
  front = "frontend"
}

export class Project {
  constructor(
    private _title: string,
    private url: string,
    private description: string,
    private image: string,
    private category: Category,
    private tecnologies: string[]
  ) {}

  
  public get title(): string {
    return this._title;
  }
  
}
