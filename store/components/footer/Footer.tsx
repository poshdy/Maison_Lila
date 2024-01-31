import React from "react";
import Logo from "@/public/whiteLogo.png";
import Image from "next/image";
import FooterLinks from "./FooterLinks";
import MediaLinks from "./MediaLinks";

const Footer = () => {
  return (
    <footer className="w-full bg-[#3C2E3D] text-white  flex flex-col items-center space-y-4 pb-10">
      <div className="relative w-20 md:w-28 aspect-square">
        <Image
          fill
          src={Logo}
          alt="logo"
          className="object-cover"
          sizes="100vh , 100vw"
          priority
        />
      </div>
      <FooterLinks />
      <MediaLinks />
    </footer>
  );
};

export default Footer;
