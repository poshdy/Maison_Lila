"use client";
import { Product } from "@/types";
import { ArrowRight } from "lucide-react";
import React from "react";
import Link from "next/link";
import Wrapper from "../../Wrapper";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
type Props = {
  data: Product[];
  title: string;
};

const ProductSlider = ({ data, title }: Props) => {
  return (
    <Wrapper>
      <div className="w-full flex flex-col md:flex-row md:justify-between items-center space-y-2">
        <h2 className="font-medium text-xl md:text-3xl">{title}</h2>
        <Link
          className="text-xs font-light flex gap-1 items-center"
          href={"shop"}
        >
          Shop All Products <ArrowRight size={15} />
        </Link>
      </div>
      <Carousel className="w-full">
        <CarouselContent className="flex">
          {data?.map((prod) => (
            <CarouselItem
              className="flex items-center justify-center basis-1/2  md:basis-1/4"
              key={prod.id}
            >
              <ProductCard cropped key={prod.id} product={prod} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious variant={"ghost"} />
        <CarouselNext variant={"ghost"} />
      </Carousel>
    </Wrapper>
  );
};

export default ProductSlider;
