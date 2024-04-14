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
    <Carousel className="md:hidden my-6">
      <CarouselContent>
        {data?.content?.map((slide) => (
          <CarouselItem
            key={slide.id}
            className="flex flex-col items-center justify-center space-y-3"
          >
            <div className="space-y-4">
              <Heading
                size="text-4xl font-bold uppercase  leading-tight tracking-tighter font-bold"
                title={slide?.title}
              />
              <Text
                text={
                  "Ana esmy roshdy bas by2oloy ya abo el apshash wana 3ayez a3mel kaka awe begad w 3ayez 9 million dollers cash right now or i will take a shit right here!"
                }
                size="text-sm text-center"
              />
            </div>
            <div className="relative w-full h-[70vh]">
              <Image
                fill
                className="object-cover rounded-t-full"
                sizes="100vh,100vh"
                alt="slider-image"
                src={slide?.image}
              />
            </div>
            <Text
              text="Maison Lila"
              size="text-3xl leading-tight tracking-tighter font-bold"
            />
            <NavigationButton title="Shop Now" action="shop" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default MoblieView;
