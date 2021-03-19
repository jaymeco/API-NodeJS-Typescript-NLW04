

export interface IAddress {
    address: string;
    name: string;
}

export interface IMessage {
    to: IAddress;
    from: IAddress;
    subject: string;
    body: string;
}

export interface IMailProvider {
    sendMail(message: IMessage, path: string, id: string): Promise<void>
}