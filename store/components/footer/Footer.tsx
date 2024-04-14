import React from "react";
import Logo from "@/public/whiteLogo.png";
import Image from "next/image";
import FooterLinks from "./FooterLinks";
import MediaLinks from "./MediaLinks";
import { getData } from "@/fetchers";
import FooterCategories from "./footer-categories";
import FooterAccount from "./footer-account";

const Footer = async () => {
  const categories = await getData("category");
  return (
    <footer
      id="contact"
      className="w-full p-10 flex  items-center justify-center text-white bg-lila"
    >
      <section className="grid grid-cols-1 md:grid-cols-4 space-y-4 justify-items-center items-start container">
        <div className="flex flex-col md:items-start items-center md:text-left text-center justify-center space-y-2"> 
          <div className="relative w-20 aspect-square md:w-36 md:col-span-1">
            <Image
              alt="Maison Lila logo"
              src={Logo}
              className="object-cover"
              priority
              fill
              sizes="100vw,100vh"
            />
          </div>
          <p className="text-gray-400 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
            neque sequi recusandae dolores ipsam atque assumenda natus accusamus
            veniam fuga quod, dicta maxime libero error quos facere odit
            suscipit? Odio.
          </p>
          <MediaLinks/>
        </div>
        <div className="md:col-span-1 md:text-left  flex flex-col md:items-start items-center text-center justify-center space-y-2">
          <h3 className="text-xl font-semibold">Information</h3>
          <FooterLinks />
        </div>
        <div className="md:col-span-1 md:text-left  flex flex-col md:items-start items-center text-center justify-center space-y-2">
          <h3 className="text-xl font-semibold">Categories</h3>
          <FooterCategories categories={categories} />
        </div>
        <div className="md:col-span-1  md:text-left space-y-2 flex flex-col md:items-start items-center  text-center justify-center">
          <h3 className="text-xl font-semibold">Account</h3>
          <FooterAccount />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
{
  /* <div className="relative w-20 md:w-28 aspect-square">
<Image
  fill
  src={Logo}
  alt="logo"
  className="object-cover"
  sizes="100vh , 100vw"
  priority
/>
</div> */
}

{
  /* <MediaLinks />  */
}
