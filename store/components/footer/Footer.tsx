import React from "react";
import Logo from "@/public/whiteLogo.png";
import Image from "next/image";
import FooterLinks from "./FooterLinks";
import MediaLinks from "./MediaLinks";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full bg-lila text-white pb-20  flex flex-col items-center space-y-4 "
    >
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
