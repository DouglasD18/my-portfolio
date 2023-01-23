import { QRCode } from "./WhatsappContactMe";

export enum AuthorAdress {
  email = "daguiaralcantara@mail.com",
  whatsapp = "5588981578546"
}

export abstract class ContactMe {
  protected authorAdress: AuthorAdress;
  protected message: string;

  constructor(type: AuthorAdress, message: string) {
    this.authorAdress = type;
    this.message = message;
  }

  abstract sendMessage(): Promise<void>;

  abstract isConnected(): boolean | { connected: boolean, qr: QRCode } ;
}