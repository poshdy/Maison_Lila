import { EventEmitter } from "events";
import Mailgen, { Content } from "mailgen";
import nodemailer from "nodemailer";

// export const orderEv = new EventEmitter();
export const EmailEvent = new EventEmitter();
export const Transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "Maisonlilacustomerservice@gmail.com",
    pass: process.env.APP_PASSWORD,
  },
});

const MailSchema: Mailgen = new Mailgen({
  theme: "default",
  product: {
    name: "Maison Lila",
    link: "maisonlila.shop",
  },
});

EmailEvent.on("orderPlaced", async (user, order) => {
  try {
    const ClientMail: Content = {
      body: {
        name: user?.name,
        intro: "Thank You for Your Maison Lila Order",
        title:
          "Thank you for choosing Maison Lila for your bakery needs! 🍰 Your order is being prepared with care and will soon be on its way to delight your taste buds. We appreciate your support and look forward to serving you again soon!",
        table: {
          data: order.OrderItems?.map((item: any) => {
            console.log(item);
            return {
              quantity: item?.quantity,
              item: item?.Product?.name,
              price: item?.Product?.price,
              Total: order?.OrderSummary?.OrderTotal,
            };
          }),
        },
        action: {
          instructions:
            "You can check the status of your order and more in your dashboard",
          button: {
            color: "#3869D4",
            text: "Go to Dashboard",
            link: `https://maisonlila.shop`,
          },
        },
        outro: "We thank you for your purchase.",
      },
    };
    const AdminMail: Content = {
      body: {
        name: "Admin",
        intro: "Hey Admin you received a new order",
        table: {
          data: order.OrderItems?.map((item: any) => {
            return {
              item: item?.Product?.name,
              quantity: item?.quantity,
              price: item?.Product?.price,
              Total: order?.OrderSummary?.OrderTotal,
            };
          }),
        },
        action: {
          instructions: "Go and see the order details",
          button: {
            color: "#3869D4",
            text: "Go to Dashboard",
            link: "https://admin.maisonlila.shop",
          },
        },
      },
    };

    const adminMail = MailSchema.generate(AdminMail);
    const clientMail = MailSchema.generate(ClientMail);

    let ClientMessage = {
      from: process.env.USER,
      to: user?.email,
      subject: "Order Confirmed",
      html: clientMail,
    };

    let AdminMessage = {
      from: process.env.USER,
      to: "maisonlilaorders@gmail.com",
      subject: "you have a new order",
      html: adminMail,
    };
    await Transporter.sendMail(AdminMessage);
    await Transporter.sendMail(ClientMessage);
  } catch (error) {
    console.log(error);
  }
});


EmailEvent.on("Server-Error", async (name: string, Emessage: string) => {
  try {
    const WelcomeMessage: Content = {
      body: {
        name: "Posh",
        title: "Server Error",
        intro: `error name ${name} error message ${Emessage}`,

        outro: "thank you for choosing MAISON LILA",
      },
    };

    const client = MailSchema.generate(WelcomeMessage);
    let message = {
      from: process.env.USER,
      to: "developerroshdy@gmail.com",
      subject: "Server Error",
      html: client,
    };

    await Transporter.sendMail(message);
  } catch (error) {
    console.log(error);
  }
});
