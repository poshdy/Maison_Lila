"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Category } from "@/types";
import Image from "next/image";
import Wrapper from "./Wrapper";
import { useRouter } from "next/navigation";
type Props = {
  categories: Category[];
};

const CategoriesSlider = ({ categories }: Props) => {
  const router = useRouter()
  return (
    <Wrapper>
      <div className="flex flex-col pt-5 items-center justify-center gap-2">
        <p>Shop by Category</p>
        <h2 className="text-3xl font-medium">
          Popular Categories
        </h2>
      </div>
      <Carousel className="w-full px-5 ">
        <CarouselContent className="w-full">
          {categories?.map((category) => (
            <CarouselItem
              key={category.id}
              className="basis-1/3  md:basis-1/5 flex items-center flex-col justify-center"
            >
              <div onClick={()=> router.push(`/shop?category=${category.name}`)} className="relative w-20 md:w-48 aspect-square">
                <Image
                  alt="category"
                  className="object-cover"
                  fill
                  src={category.imageUrl}
                />
              </div>
              <h4 className="text-base md:text-xl">{category.name}</h4>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant={"ghost"} />
        <CarouselNext variant={"ghost"} />
      </Carousel>
    </Wrapper>
  );
};

export default CategoriesSlider;
