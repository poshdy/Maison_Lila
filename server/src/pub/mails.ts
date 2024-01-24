import { EventEmitter } from "events";
import Mailgen, { Content } from "mailgen";
import nodemailer from "nodemailer";

export const orderEv = new EventEmitter();
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
    link: "maisonlila.shop" ,
  },
});

EmailEvent.on("orderPlaced", async (name: string, order) => {
  try {
    const OrderEmailClient: Content = {
      body: {
        name,
        intro: "Your order has been processed successfully.",
        table: {
          data: order.map((item: any) => {
            console.log(item);
            return {
              quantity: item?.quantity,
              item: item?.Product?.name,
              price: item?.Product?.price,
            };
          }),
        },

        dictionary: order?.orderSummary?.OrderTotal,
        action: {
          instructions:
            "You can check the status of your order and more in your dashboard:",
          button: {
            color: "#3869D4",
            text: "Go to Dashboard",
            link: "www.google.com",
          },
        },
        outro: "We thank you for your purchase.",
      },
    };
    const OrderEmailAdmin: Content = {
      body: {
        name: "Admin",
        intro: "Hey Admin you received a new order ",
        table: {
          data: order?.map((item: any) => {
            return {
              item: item?.Product?.name,
              quantity: item?.quantity,
              price: item?.Product?.price,
            };
          }),
        },
        action: {
          instructions: "Go and see the order details",
          button: {
            color: "#3869D4",
            text: "Go to Dashboard",
            link: "www.google.com",
          },
        },
        outro: "We thank you for your purchase.",
      },
    };

    const emailBody = MailSchema.generate(OrderEmailAdmin);
    const email = MailSchema.generate(OrderEmailClient);

    let message = {
      from: process.env.USER,
      to: "developerroshdy@gmail.com",
      subject: "Order Confirmed",
      html: email,
    };

    let AdminMessage = {
      from: process.env.USER,
      to: "maisonlilaorders@gmail.com",
      subject: "you have a new order",
      html: emailBody,
    };
    await Transporter.sendMail(AdminMessage);
    await Transporter.sendMail(message);
  } catch (error) {
    console.log(error);
  }
});

EmailEvent.on("Customized-order", async (order: any) => {
  try {
    const CustomizedClient: Content = {
      body: {
        name: order.name,
        intro:
          "we received your Order we will get in touch as soon as possible",

        action: {
          instructions: "Thank You",
          button: {
            color: "#3869D4",
            text: "Shop Now!",
            link: "www.google.com",
          },
        },
        outro: "thank you for choosing MAISON LILA",
      },
    };
    const CustomizedAdmin: Content = {
      body: {
        name: "Hello Admin",
        intro: "A Client Placed a new Customzied order so go check it out",

        action: {
          instructions: "Dashboard",
          button: {
            color: "#3869D4",
            text: "Dashboard",
            link: "www.google.com",
          },
        },
      },
    };

    const client = MailSchema.generate(CustomizedClient);
    const admin = MailSchema.generate(CustomizedAdmin);
    let message = {
      from: process.env.USER,
      to: order.email,
      subject: "Order Confirmed",
      html: client,
    };

    let AdminMessage = {
      from: process.env.USER,
      to: "maisonlilaorders@gmail.com",
      subject: "you have a new customized order",
      html: admin,
    };
    await Transporter.sendMail(AdminMessage);
    await Transporter.sendMail(message);
  } catch (error) {
    console.log(error);
  }
});
EmailEvent.on("user-creation", async (user: any) => {
  try {
    const WelcomeMessage: Content = {
      body: {
        name: user.name,
        title: "Welcome to MAISON LILA",
        intro:
          "You have activated your customer account. Next time you shop with us, log in for faster checkout",

        action: {
          instructions: "Thank You for Choosing us",
          button: {
            color: "#3869D4",
            text: "Shop Now!",
            link: "www.google.com",
          },
        },
        outro: "thank you for choosing MAISON LILA",
      },
    };

    const client = MailSchema.generate(WelcomeMessage);
    let message = {
      from: process.env.USER,
      to: user.email,
      subject: "Order Confirmed",
      html: client,
    };

    await Transporter.sendMail(message);
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
