import { ContactMe, AuthorAdress } from "./ContactMe";

export class EmailContactMe extends ContactMe {
  constructor(myAdreess: string, message: string) {
    super(AuthorAdress.email, myAdreess, message);
  }

  async sendMessage(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}