import Image from "next/image";
import React from "react";
import { banner } from "@/types";
import Heading from "./Shared/Heading";
import Text from "./Shared/Text";
import NavigationButton from "./Shared/NavigationButton";

type Props = {
  banner: banner | null;
};
const Banner = async ({ banner }: Props) => {
  return (
    <>
      {banner && (
        <section className="relative w-full h-[65vh] ">
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
            <Heading
              size="text-5xl md:text-7xl text-white"
              title={banner?.title}
            />

            <Text size="text-sm text-gray-300" text={banner?.text} />
            <NavigationButton title="Order Now" action="customized-order" />
          </div>
        </section>
      )}
    </>
  );
};

export default Banner;
