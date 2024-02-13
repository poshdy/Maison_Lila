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
import Wrapper from "../Wrapper";
type Props = {
  data: slider;
};

const DesktopView = ({ data }: Props) => {
  return (
    <Carousel className="hidden md:flex">
      <Wrapper>
        <CarouselContent>
          {data?.content?.map((slide) => (
            <CarouselItem
              key={slide.id}
              className="flex justify-around items-start space-y-2"
            >
              <div className="h-full flex flex-col space-y-5 pt-5">
                <h1 className=" text-7xl leading-tight tracking-tighter uppercase">
                  {slide.title}
                </h1>

                <h5 className="text-lg font-normal">{slide.text}</h5>
                <Link
                  className="text-lg font-semibold flex items-center space-x-2 rounded-full"
                  href={"shop"}
                >
                  Shop Now <IoIosArrowRoundForward size={20} />
                </Link>
              </div>

              <div className="relative w-[40%] h-[90vh]">
                <Image
                  fill
                  className="object-cover rounded-t-full"
                  sizes="100vh,100vh"
                  alt="slider-image"
                  src={slide?.image}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Wrapper>
    </Carousel>
  );
};

export default DesktopView;
