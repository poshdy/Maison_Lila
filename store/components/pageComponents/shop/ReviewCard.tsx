"use client";
import { Review } from "@/types";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DATE } from "@/lib/utils";
type Props = {
  reviews: Review[];
};

const ReviewCard = ({ reviews }: Props) => {
  return (
    <Carousel className="w-full  ">
      <CarouselContent className="w-full flex ">
        {reviews.map((rev) => (
          <CarouselItem key={rev?.id} className=" flex">
            <Card className="space-x-2 w-full">
              <CardHeader>
                <CardTitle>{rev?.user?.name}</CardTitle>
                <CardDescription>{rev.rating} STARS</CardDescription>
                <CardDescription>
                  created at {DATE(rev?.createdAt)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h3>{rev?.content}</h3>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant={"ghost"} />
      <CarouselNext variant={"ghost"} />
    </Carousel>
  );
};

export default ReviewCard;
