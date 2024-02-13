"use client";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import { slider } from "@/types";
type Props = {
  data: slider;
};

const MoblieView = ({ data }: Props) => {
  return (
    <Carousel className="flex md:hidden">
      <CarouselContent>
        {data?.content?.map((slide) => (
          <CarouselItem
            key={slide.id}
            className="flex flex-col items-center justify-center space-y-4"
          >
            <h1 className="text-3xl font-bold uppercase leading-tight tracking-tighter  py-2">
              {slide.title}
            </h1>
            <div className="relative w-[95%] h-[70vh]">
              <Image
                fill
                className="object-cover rounded-t-full"
                sizes="100vh,100vh"
                alt="slider-image"
                src={slide?.image}
              />
            </div>
            <h5 className=" w-full text-center text-[#141414] font-medium text-base">
              {slide.text}
            </h5>
            <Link
              className="text-lg font-semibold flex items-center space-x-2 rounded-full"
              href={"shop"}
            >
              Shop Now <IoIosArrowRoundForward className="" size={20} />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default MoblieView;
