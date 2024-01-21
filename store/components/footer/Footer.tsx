import React from "react";
import Logo from "@/public/whiteLogo.png";
import Image from "next/image";
import FooterLinks from "./FooterLinks";
import MediaLinks from "./MediaLinks";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-start items-center pt-4 md:flex-row md:justify-around mt-2 space-y-4 h-[55vh] text-white bg-[#3C2E3D]">
      <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]  relative">
        <Image src={Logo} className="w-full h-full" alt="logo" />
      </div>
      <FooterLinks />
      <MediaLinks />
    </footer>
  );
};

export default Footer;
