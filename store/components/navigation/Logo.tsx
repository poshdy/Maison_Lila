import React from "react";
import logo from "@/public/Logo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative w-24 md:w-28 aspect-square">
      <Image
        fill
        src={logo}
        alt="alt"
        className="object-cover"
        sizes="100vh , 100vw"
        priority
      />
    </div>
  );
};

export default Logo;
