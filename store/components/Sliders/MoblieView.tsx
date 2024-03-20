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

const MoblieView = ({ data }: Props) => {
  return (
    <Carousel className="md:hidden">
      <CarouselContent>
        {data?.content?.map((slide) => (
          <CarouselItem
            key={slide.id}
            className="space-y-4 flex flex-col items-center"
          >
            <Heading size="text-4xl font-bold uppercase" title={slide?.title} />
            <div className="relative w-full h-[60vh]">
              <Image
                fill
                className="object-cover rounded-t-full"
                sizes="100vh,100vh"
                alt="slider-image"
                src={slide?.image}
              />
            </div>
            <Text text={slide?.text} size="text-sm text-center" />
            <NavigationButton title="Shop Now" action="shop" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default MoblieView;
