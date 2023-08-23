import { createTransport } from "nodemailer";
import "dotenv/config";
import Mailgen from "mailgen";
import { IEmailRequest } from "../interfaces/email.interface";

class EmailService {
  async sendEmail({ to, subject, text }: IEmailRequest) {
    const transporter = createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter
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
  }

  resetPasswordTemplate(userEmail: string, userName: string, resetToken: string) {
    const mailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "KenzieCars",
        // link da home do site
        link: `http://localhost:5173/user/resetPassword/${resetToken}`,
      },
    });

    const email = {
      body: {
        name: userName,
        intro:
          "Você recebeu este e-mail porque foi recebida uma solicitação de redefinição de senha para sua conta.",
        action: {
          instructions: "Clique no botão abaixo para redefinir sua senha:",
          button: {
            color: "#DC4D2F",
            text: "Redefina sua senha",
            // link de página de redefinição de senha 
            link: `http://localhost:5173/user/resetPassword/${resetToken}`,
          },
        },
        outro:
          "Se você não solicitou uma redefinição de senha, nenhuma outra ação será necessária de sua parte.",
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

export const emailService = new EmailService();

