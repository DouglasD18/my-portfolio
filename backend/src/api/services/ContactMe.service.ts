import { QRCode, WhatsappContactMe } from "../entities/WhatsappContactMe";
import { EmailContactMe } from '../entities/EmailContactMe';

type Type = "email" | "whatsapp";

export interface IContactMeRepository {
  sendMessage(): Promise<void>;
  isConnected(): boolean | { connected: boolean, qr: QRCode } ;
}

export class ContactMeService {
  private repository: IContactMeRepository;

  constructor(type: Type, message: string) {
    if (type === "whatsapp") {
      this.repository = new WhatsappContactMe(message);
    } else {
      this.repository = new EmailContactMe(message);
    }
  }

  get(): boolean | { connected: boolean, qr: QRCode } {
    return this.repository.isConnected();
  }

  async send(): Promise<boolean> {
    try {
      await this.repository.sendMessage();

      return true;
    } catch (error) {
      console.error(error);
    }
  }
}