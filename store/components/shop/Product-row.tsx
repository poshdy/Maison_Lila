"use client";
import { Product } from "@/types";
import React from "react";
import ProductCard from "./ProductCard";
import Heading from "@/components/Shared/Heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
type Props = {
  data: Product[];
  title: string;
};

const ProductSample = ({ data, title }: Props) => {
  return (
    <section className="space-y-4 w-[90%] mx-auto md:w-full">
      <Heading size="text-3xl md:text-4xl" title={title} />
      <Carousel className="w-[95%] mx-auto md:w-full">
        <CarouselContent className="w-full">
          {data?.map((prod) => (
            <CarouselItem
              key={prod?.id}
              className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <ProductCard key={prod.id} product={prod} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant={"ghost"} />
        <CarouselNext variant={"ghost"} />
      </Carousel>
    </section>
  );
};

export default ProductSample;
