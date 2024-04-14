"use client";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { slider } from "@/types";
import Heading from "../Shared/Heading";
import Text from "../Shared/Text";
import NavigationButton from "../Shared/NavigationButton";

type Props = {
  data: slider;
};

const DesktopView = ({ data }: Props) => {
  return (
    <Carousel className="hidden w-full md:flex my-10">
      <CarouselContent className="w-full flex">
        {data?.content?.map((slide) => (
          <CarouselItem
            key={slide?.id}
            className="grid grid-cols-7 w-full justify-items-center "
          >
            <Heading
              size="text-7xl w-full text-left font-bold uppercase col-span-2"
              title={slide?.title}
            />
            <div className="relative w-[90%] h-[90vh] col-span-3">
              <Image
                fill
                className="object-cover rounded-t-full"
                sizes="100vh,100vh"
                alt="slider-image"
                src={slide?.image}
              />
            </div>
            <div className="self-end col-span-2 space-y-2">
              <Text text={slide?.text} size="text-lg" />
              <NavigationButton title="Shop Now" action="shop" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default DesktopView;
{
  /* <div className="space-y-3">
       
          
            </div> */
}
