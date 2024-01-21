import { Request } from "express";
import { prismadb } from "../lib/prismadb.js";
import { OrderItem } from "./productServies.js";

export const CreateOrder = async (req: Request, orderItems: OrderItem) => {
  const {
    userId,
    OrderTotal,
    Subtotal,
    Discount,
    paymentMethod,
    addressId,
    DeliveryFee,
    phone,
    comment,
  } = req.body;

  const placeOrder = await prismadb.order.create({
    data: {
      user: {
        connect: { id: userId },
      },
      orderStatus: "PENDING",
      phoneNumber: phone,
      Address: {
        connect: { id: addressId },
      },
      comment,
      OrderItems: {
        createMany: {
          data: orderItems,
        },
      },
      orderSummary: {
        create: {
          paymentMethod,
          Subtotal,
          DeliveryFee,
          Discount,
          OrderTotal,
        },
      },
    },
    select: {
      Address: {
        include: {
          zone: true,
        },
      },
      comment: true,
      id: true,
      orderSummary: {
        select: {
          DeliveryFee: true,
          OrderTotal: true,
          paymentMethod: true,
          Subtotal: true,
          Discount: true,
        },
      },
      OrderItems: {
        select: {
          Product: {
            select: {
              name: true,
              price: true,
            },
          },
          quantity: true,
        },
      },
      user: {
        select: {
          name: true,
          id: true,
          email: true,
        },
      },
      createdAt: true,
    },
  });
  return placeOrder;
};

// export const AuthenticatePayment = async () => {
//   try {
//     const data = {
//       api_key: process.env.PAYMOB_API_KEY,
//     };
//     const headers = {
//       "Content-Type": "application/json",
//     };

//     const response = await axios.post(
//       `${process.env.PAYMOB_BASE_URL}/auth/tokens`,
//       data,
//       {
//         headers,
//       }
//     );
//     const token = response.data.token;
//     return token;
//   } catch (error: any) {
//     console.log(error.message, "Paymob auth error Auth error");
//   }
// };

// export const Payment = async (amount_cents: number, req: Request) => {
//   try {
//     const accessToken = await AuthenticatePayment();
//     const {
//       phone,
//       email,
//       orderTotal,
//       name,
//       apartmentNo,
//       BuildingNo,
//       streetName,
//       Floor,
//       zoneId,
//       orderItems,
//     } = req.body;
//     const orderUrl = `${process.env.PAYMOB_BASE_URL}/ecommerce/orders`;
//     const headers = {
//       "Content-Type": "application/json",
//     };
//     const orderData = {
//       auth_token: accessToken,
//       delivery_needed: "false",
//       amount_cents,
//       currency: "EGP",
//       items: orderItems.map((item: OrderItem) => {
//         return {
//           name: item.productId,
//           amount_cents: 10000,
//           quantity: item.quantity,
//         };
//       }),
//     };
//     const order = await axios.post(orderUrl, orderData, { headers });
//     const orderId = order.data.id;
//     const paymentKeyUrl = `${process.env.PAYMOB_BASE_URL}/acceptance/payment_keys`;

//     const paymentKeyData = {
//       auth_token: accessToken,
//       amount_cents: 10000,
//       expiration: 3600,
//       order_id: orderId,
//       billing_data: {
//         apartment: "803",
//         email: "claudette09@exa.com",
//         floor: "42",
//         first_name: "Clifford",
//         street: "Ethan Land",
//         building: "8028",
//         phone_number: "+86(8)9135210487",
//         shipping_method: "PKG",
//         postal_code: "01898",
//         city: "Jaskolskiburgh",
//         country: "CR",
//         last_name: "Nicolas",
//         state: "Utah",
//       },

//       currency: "EGP",
//       integration_id: 4431947,
//     };
//     const paymentKey = await axios.post(paymentKeyUrl, paymentKeyData, {
//       headers,
//     });
//     return paymentKey.data.token;
//   } catch (error: any) {
//     console.log(error.message);
//   }
// };
