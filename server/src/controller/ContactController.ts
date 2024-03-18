import { Request, Response } from "express";
import {
  CreateContact,
  DeleteContact,
  GetContact,
  UpdateContact,
} from "../services/contact/index.js";

export const OnCreateContact = async (req: Request, res: Response) => {
  const data = req.body;
  await CreateContact(data);
  res.status(201).send({
    message: "Contact Info Created Successfully",
  });
};
export const OnGetContact = async (req: Request, res: Response) => {
  const data = await GetContact();
  res.status(200).send({
    data,
  });
};
export const OnUpdateContact = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  await UpdateContact(id, data);
  res.status(200).send({
    message: "Contact Info Updated Successfully",
  });
};
export const OnDeleteContact = async (req: Request, res: Response) => {
  const { id } = req.params;
  await DeleteContact(id);
  res.status(200).send({
    message: "Contact Info Deleted Successfully",
  });
};
// import { prismadb } from "../lib/prismadb.js";

// export const addContact = async (req: Request, res: Response) => {
//   const { email, phone, facebook, instagram, tiktok } = await req.body;
//   const Contact = await prismadb.contactInfo.create({
//     data: {
//       email,
//       facebook,
//       instagram,
//       phone,
//       tiktok,
//     },
//   });

//   res.status(201).send(Contact);
// };
// export const getContact = async (req: Request, res: Response) => {
//   const Contact = await prismadb.contactInfo.findMany();
//   res.status(200).send(Contact);
// };
// export const getContactById = async (req: Request, res: Response) => {
//   const Contact = await prismadb.contactInfo.findUnique({
//     where: {
//       id: req.params.id,
//     },
//   });
//   res.status(200).send(Contact);
// };

// export const updateContact = async (req: Request, res: Response) => {
//   const { id } = req.params;

//   if (!id) {
//     return res.status(400).json("you must provide Contact id");
//   }

//   const Contact = await prismadb.contactInfo.update({
//     where: {
//       id: id,
//     },
//     data: req.body,
//   });

//   res.status(201).send({
//     message: `${req.body} updated`,
//     Contact,
//   });
// };
// export const deleteContact = async (req: Request, res: Response) => {
//   const { id } = req.params;

//   const Contact = await prismadb.contactInfo.delete({
//     where: {
//       id,
//     },
//   });
//   res.status(200).send({
//     message: `Contact details delelted`,
//     Contact,
//   });
// };
