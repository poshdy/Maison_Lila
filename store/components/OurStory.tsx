import Image from "next/image";
import React from "react";
import { BottomImage } from "@/types";

type Props = {
  bottomImage: BottomImage | null;
};
const OurStory = async ({ bottomImage }: Props) => {
  return (
    <section className=" text-[#3C2E3D] w-full flex flex-col  md:flex-row items-center gap-2 space-y-2  p-5">
      <div className="space-y-5 w-full text-center md:w-[50%] pt-5 felx flex-col items-center justify-center">
        <h3 className="text-3xl md:text-5xl font-semibold ">
          {bottomImage?.title}
        </h3>
        <p className="font-light text-base w-full">{bottomImage?.text}</p>
      </div>

      <div className="relative w-full md:w-[50%] h-[70vh] ">
        <Image
          className="object-cover"
          src={bottomImage?.image as string}
          fill
          sizes="100vw,100vh"
          alt="banner"
        />
      </div>
    </section>
  );
};

export default OurStory;
