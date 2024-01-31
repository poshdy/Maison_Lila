import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import { banner } from "@/types";

type Props = {
  banner: banner | null;
};
const Banner = async ({ banner }: Props) => {
  return (
    <>
      {banner && (
        <section className="relative w-full h-[65vh] ">
          {" "}
          <Image
            fill
            alt="banner"
            src={banner?.image as string}
            className="object-cover brightness-50"
            sizes="100vw ,100vh"
          />
          <div
            className={`absolute top-[50%] left-[50%] flex justify-center items-center text-center translate-y-[-50%] translate-x-[-50%] text-white flex-col gap-4`}
          >
            <h4 className=" text-5xl leading-tight tracking-tighter">
              {banner?.title}
            </h4>
            <p className="text-base ">{banner?.text}</p>
            <Link
              href={"customized-order"}
              className="px-5 py-2 bg-transparent text-white hover:bg-white hover:text-black duration-300 ease-in-out flex items-center gap-1 font-bold text-base"
            >
              Order Now <IoIosArrowRoundForward className="" size={20} />
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default Banner;
