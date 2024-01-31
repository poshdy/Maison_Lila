"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { slider } from "@/types";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
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
              className="flex md:flex-row md:items-start md:justify-around flex-col items-center justify-center space-y-2"
            >
              <div className="md:pt-12 text-center md:text-left md:flex md:flex-col md:items-start md:justify-center">
                <h1 className=" text-3xl font-bold md:text-7xl ">{sl.title}</h1>
                <div className="hidden md:flex md:items-start md:justify-start flex-col">
                  <p className="">{sl.text}</p>
                  <Link
                    href={"shop"}
                    className="px-5 py-2 bg-transparent hover:bg-black hover:text-white duration-300 ease-in-out text-black  flex items-center gap-1 font-bold text-base"
                  >
                    Shop Now <IoIosArrowRoundForward className="" size={20} />
                  </Link>
                </div>
              </div>

              <div className="relative w-[80%] h-[60vh] md:w-[40%] md:h-[90vh]">
                <Image
                  fill
                  className="object-cover rounded-t-full"
                  sizes="100vh,100vh"
                  alt="slider-image"
                  src={sl?.image}
                />
              </div>
              <div className="md:hidden flex items-center text-center justify-center flex-col space-y-4">
                <p className="text-gray-900  text-base">{sl.text}</p>
                <Link
                  href={"shop"}
                  className="px-5 py-2 bg-transparent hover:bg-black hover:text-white duration-300 ease-in-out text-black  flex items-center gap-1 font-bold text-base"
                >
                  Shop Now <IoIosArrowRoundForward className="" size={20} />
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
