export enum AuthorAdress {
  email = "daguiaralcantara@mail.com",
  wahtsapp = "5588981578546"
}

export abstract class ContactMe {
  protected authorAdress: AuthorAdress;
  protected message: string;

  constructor(type: AuthorAdress, message: string) {
    this.authorAdress = type;
    this.message = message;
  }

  abstract sendMessage(): Promise<void>;
}