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
import { Button } from "../ui/button";
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
            className="basis-1/3 md:basis-1/4 lg:basis-1/5 text-center md:flex md:flex-col md:items-center space-y-2"
            key={category?.id}
          >
            <div
              onClick={() => router.push(`/shop?category=${category?.name}`)}
              className="w-30 md:w-48 lg:w-52 aspect-square relative"
            >
              <Image
                alt={category?.name}
                className="object-cover rounded-full"
                fill
                sizes="100wv,100vh"
                src={category?.imageUrl}
              />
            </div>
            <Text
              size="font-semibold text-base md:text-lg text-center"
              text={category?.name}
            />
            <div className="flex flex-col items-center md:flex-row gap-2">
              {category.Category.length != 0
                ? category.Category.map((subCat) => (
                    <div key={subCat?.id} className="flex flex-row ">
                      <Button
                        variant="main"
                        className="w-fit py-1 text-sm px-2"
                        onClick={() =>
                          router.push(`shop?category=${subCat?.name}`)
                        }
                      >
                        {subCat.name}
                      </Button>
                    </div>
                  ))
                : null}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious variant={"ghost"} />
      <CarouselNext variant={"ghost"} />
    </Carousel>
  );
};

export default CategoriesSlider;
