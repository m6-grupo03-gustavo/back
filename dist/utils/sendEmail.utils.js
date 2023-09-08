"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailService = void 0;
const nodemailer_1 = require("nodemailer");
require("dotenv/config");
const mailgen_1 = __importDefault(require("mailgen"));
class EmailService {
    sendEmail({ to, subject, text }) {
        return __awaiter(this, void 0, void 0, function* () {
            const transporter = (0, nodemailer_1.createTransport)({
                host: "smtp.gmail.com",
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });
            yield transporter
                .sendMail({
                from: process.env.SMTP_USER,
                to,
                subject,
                html: text,
            })
                .then(() => {
                console.log("Email send");
            })
                .catch((err) => {
                console.log(err);
            });
        });
    }
    resetPasswordTemplate(userEmail, userName, resetToken) {
        const mailGenerator = new mailgen_1.default({
            theme: "default",
            product: {
                name: "KenzieCars",
                // link da home do site
                link: `${process.env.URL_FROM_FRONT}/user/resetPassword/${resetToken}`,
            },
        });
        const email = {
            body: {
                name: userName,
                intro: "Você recebeu este e-mail porque foi recebida uma solicitação de redefinição de senha para sua conta.",
                action: {
                    instructions: "Clique no botão abaixo para redefinir sua senha:",
                    button: {
                        color: "#DC4D2F",
                        text: "Redefina sua senha",
                        // link de página de redefinição de senha 
                        link: `${process.env.URL_FROM_FRONT}/user/resetPassword/${resetToken}`,
                    },
                },
                outro: "Se você não solicitou uma redefinição de senha, nenhuma outra ação será necessária de sua parte.",
            },
        };
        const emailBody = mailGenerator.generate(email);
        const emailTemplate = {
            to: userEmail,
            subject: "Reset Password",
            text: emailBody,
        };
        return emailTemplate;
    }
}
exports.emailService = new EmailService();
