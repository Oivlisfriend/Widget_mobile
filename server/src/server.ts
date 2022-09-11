import cors from 'cors';
import express from 'express'
import nodemailer from 'nodemailer';
import { routes } from './route';
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "755c3515e96c35",
        pass: "9c5f0be8a63d35"
    }
});
app.listen(3333, () => {
    console.log('HTTP server running !');
});