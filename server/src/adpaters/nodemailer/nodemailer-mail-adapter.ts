import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "755c3515e96c35",
        pass: "9c5f0be8a63d35"
    }
});
export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Delta Arts <oi@feedget.com>',
            to: 'Sílvio Gongo <roberotmarcelogongo@gmail.com>',
            subject,
            html: body
        });
    };
}