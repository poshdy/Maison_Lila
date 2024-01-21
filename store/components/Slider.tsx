"use client";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { slider, SliderContent } from "@/types";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import { Button } from "./ui/button";
import Wrapper from "./Wrapper";
import Link from "next/link";
type Props = {
  data: slider;
};

const Slider = ({ data }: Props) => {
  return (
    <Wrapper>
      <Carousel className="">
        <CarouselContent>
          {data?.content?.map((sl) => (
            <CarouselItem
              key={sl.id}
              className="flex md:flex-row md:items-start md:justify-around flex-col space-y-2 items-center justify-center"
            >
              <div className="md:pt-12 text-center md:text-left md:flex md:flex-col md:items-start md:justify-center">
                <h1 className=" text-3xl md:text-7xl ">{sl.title}</h1>
                <div className="hidden md:flex md:items-start md:justify-start flex-col">
                  <p className="">{sl.text}</p>
                  <Button className="bg-transparent text-black font-medium">
                    Shop Now <IoIosArrowRoundForward className="" size={20} />
                  </Button>
                </div>
              </div>

              <div className="relative w-[80%] h-[60vh] md:w-[40%] md:h-[90vh]">
                <Image
                  fill
                  className="object-cover rounded-t-full"
                  sizes="100vh,100vh"
                  alt="ne"
                  src={sl?.image}
                />
              </div>
              <div className="md:hidden flex items-center text-center space-y-1 justify-center flex-col">
                <p className="">{sl.text}</p>
                <Link href={"shop"}>
                  <Button className="bg-transparent font-medium text-black hover:bg-transparent ">
                    Shop Now <IoIosArrowRoundForward className="" size={20} />
                  </Button>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Wrapper>
  );
};

export default Slider;
