"use client";
import { Product } from "@/types";
import React from "react";
import Wrapper from "../../Wrapper";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import Heading from "@/components/Heading";
type Props = {
  data: Product[];
  title: string;
};

const ProductSlider = ({ data, title }: Props) => {
  return (
    <>
      <Heading title={title} />
      <Carousel className="w-full">
        <CarouselContent className="">
          {data?.map((prod) => (
            <CarouselItem className="flex justify-center  md:basis-1/4" key={prod.id}>
              <ProductCard key={prod.id} product={prod} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious variant={"ghost"} />
        <CarouselNext variant={"ghost"} />
      </Carousel>
    </>
  );
};

export default ProductSlider;
