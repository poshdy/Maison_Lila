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

import { useRouter } from "next/navigation";
import Text from "../Shared/Text";
type Props = {
  categories: Category[];
};

const CategoriesSlider = ({ categories }: Props) => {
  const filterd = categories?.filter((cat) => cat?.parentId == null);

  const router = useRouter();
  return (
    <Carousel className="w-[85%] mx-auto">
      <CarouselContent>
        {filterd?.map((category) => (
          <CarouselItem
            className="basis-1/4 md:basis-1/4 text-center md:flex md:flex-col md:items-center"
            key={category?.id}
          >
            <div
              onClick={() => router.push(`/shop?category=${category?.name}`)}
              className="relative cursor-pointer w-16 md:w-32 aspect-square"
            >
              <Image
                alt="category"
                className="object-cover  rounded-full"
                fill
                sizes="100wv,100vh"
                src={category?.imageUrl}
              />
            </div>
            <Text size="text-sm md:text-base" text={category?.name} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant={"ghost"} />
      <CarouselNext variant={"ghost"} />
    </Carousel>
  );
};

export default CategoriesSlider;
