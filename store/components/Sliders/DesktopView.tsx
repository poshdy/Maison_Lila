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
    <Carousel className="hidden md:flex">
      <CarouselContent className="mt-10">
        {data?.content?.map((slide) => (
          <CarouselItem key={slide.id} className="grid grid-cols-6 gap-5 ">
            <div className="col-span-3  space-y-3">
              <Heading
                size="text-7xl text-left uppercase"
                title={slide.title}
              />
              <Text text={slide.text} size="text-lg" />
              <NavigationButton title="Shop Now" action="shop" />
            </div>
            <div className="col-span-3">
              <div className="relative w-[90%] flex h-[80vh]">
                <Image
                  fill
                  className="object-cover rounded-t-full"
                  sizes="100vh,100vh"
                  alt="slider-image"
                  src={slide?.image}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default DesktopView;
