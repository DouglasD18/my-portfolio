import { create, Whatsapp, SocketState } from "venom-bot";
import { ContactMe, AuthorAdress } from './ContactMe';

export type QRCode = {
  base64Qr: string;
}

export class WhatsappContactMe extends ContactMe {
  private client: Whatsapp;
  private connected: boolean;
  private qr: QRCode;

  constructor(message: string) {
    super(AuthorAdress.whatsapp, message);

    this.initialize();
  }

  isConnected(): boolean | { connected: boolean, qr: QRCode } {
    if (!this.connected) {
      return { connected: this.connected, qr: this.qr };
    } else {
      return this.connected;
    }
  }

  protected async sendText() {
    await this.client.sendText(`${this.authorAdress}@c.us`, this.message);
  }

  protected initialize() {
    const qr = (base64Qr: string) => {
      this.qr = { base64Qr }
    }

    const status = (statusSession: string) => {
      this.connected = ["isLogged", "qrReadSucess", "chatsAvailable"].includes(statusSession);
    }

    const start = (client: Whatsapp) => {
      this.client = client;

      client.onStateChange((state: string) => {
        this.connected = state === SocketState.CONNECTED;
      });
    }

    create("sender", qr, status)
      .then((client: Whatsapp) => start(client))
      .catch((error: Error) => console.error(error))
  }

  async sendMessage(): Promise<void> {
    await this.sendText();
  }
}
