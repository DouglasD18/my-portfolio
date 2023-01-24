import { ContactMe, AuthorAdress } from "./ContactMe";
import { QRCode } from "./WhatsappContactMe";

export class EmailContactMe extends ContactMe {
  constructor(message: string) {
    super(AuthorAdress.email, message);
  }
  
  isConnected(): boolean | { connected: boolean; qr: QRCode; } {
    return true;
  }

  async sendMessage(): Promise<void> {
    throw new Error("Method not implemented.");
  }
}