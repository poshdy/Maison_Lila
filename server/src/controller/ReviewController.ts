import { NextFunction, Request, Response } from "express";
import { prismadb } from "../lib/prismadb.js";

export const addReview = async (req: Request, res: Response) => {
  const { content, userId, productId } = req.body;
  const createRev = await prismadb.review.create({
    data: {
      content,
      rating: req.body.rating,
      user: { connect: { id: userId } },
      product: { connect: { id: productId } },
    },
  });
  res.status(201).send(createRev);
};
export const getPublished = async (req: Request, res: Response) => {
  const allRev = await prismadb.review.findMany({
    select: {
      content: true,
      id: true,
      createdAt: true,
      product: {
        select: {
          name: true,
          id: true,
          image: true,
        },
      },
      rating: true,
      user: {
        select: {
          email: true,
          name: true,
        },
      },
      published: true,
    },
    where: {
      published: true,
    },
  });

  res.status(200).send(allRev);
};
export const getUnPublished = async (req: Request, res: Response) => {
  const allRev = await prismadb.review.findMany({
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
      product: {
        select: {
          name: true,
          id: true,
        },
      },
    },
    where: {
      published: false,
    },
  });

  res.status(200).send(allRev);
};

export const publishReview = async (req: Request, res: Response) => {
  const { id } = req.params;

  await prismadb.$transaction(async (tx) => {
    const review = await tx.review.findUnique({
      where: {
        id,
      },
    });
    await tx.review.update({
      where: {
        id,
      },
      data: {
        published: !review?.published,
      },
    });
  });

  res.status(201).send("Review Published Successfully");
};

export const getProductReviews = async (req: Request, res: Response) => {
  const productRev = await prismadb.review.findMany({
    where: {
      productId: req.params.productId,
      published: true,
    },
    include: {
      user: true,
    },
  });

  res.status(200).send(productRev);
};
export const DeleteReview = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prismadb.review.delete({
    where: {
      id,
    },
  });

  res.status(200).send("Review Deleted Successfully");
};
