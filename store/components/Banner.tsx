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
            <Link className="" href={"customized-order"}>
              <Button className="bg-transparent text-white font-medium hover:bg-transparent">
                Order Now <IoIosArrowRoundForward className="" size={20} />
              </Button>
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default Banner;
