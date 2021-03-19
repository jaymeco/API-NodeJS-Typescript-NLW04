import { IMailProvider, IMessage } from '../IMailProvider';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import handlebars from 'handlebars'
import fs from 'fs';

export class SendMailProvider implements IMailProvider {
    private transporter: Mail
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.mailtrap.io",
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.SMTP_AUTH_USER,
                pass: process.env.SMTP_AUTH_PASSWORD, 
            },
        })
    }

    async sendMail(message: IMessage, path: string, id: string): Promise<void> {
        
        const templateFileContent = fs.readFileSync(path).toString('utf8');

        const mailTemplateParse = handlebars.compile(templateFileContent);

        const html = mailTemplateParse({
            name: message.to.name,
            title: message.subject,
            description: message.body,
            link: process.env.URL_MAIL,
            id
        })

        await this.transporter.sendMail({
            to: message.to,
            from: message.from,
            html: html,
            subject: message.subject
        });
    }
}