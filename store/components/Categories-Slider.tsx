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
import Heading from "./Heading";
type Props = {
  categories: Category[];
};

const CategoriesSlider = ({ categories }: Props) => {
  const router = useRouter();
  return (
    <Wrapper>
      <Carousel>
        <Heading title="Shop by Category" />
        <CarouselContent className="w-full">
          {categories?.map((category) => (
            <CarouselItem
              key={category.id}
              className="basis-1/2 md:basis-1/5 flex items-center space-x-2 flex-col justify-center"
            >
              <div
                onClick={() => router.push(`/shop?category=${category.name}`)}
                className="relative w-28 md:w-48 aspect-square"
              >
                <Image
                  alt="category"
                  className="object-cover"
                  fill
                  sizes="100wv,100vh"
                  src={category?.imageUrl}
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
