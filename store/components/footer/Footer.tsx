import React from "react";
import FooterLinks from "./FooterLinks";
import MediaLinks from "./MediaLinks";
import { getData } from "@/fetchers";
import FooterCategories from "./footer-categories";
import FooterAccount from "./footer-account";
import Heading from "../Shared/Heading";

const Footer = async () => {
  const categories = await getData("category");
  return (
    <footer
      id="contact"
      className="w-full p-10 flex  items-center justify-center text-white bg-lila"
    >
      <section className="grid grid-cols-1 md:grid-cols-4 space-y-4 justify-items-center items-start container">
        <div className="flex flex-col md:items-start items-center md:text-left text-center justify-center space-y-2">
          <Heading size="text-3xl text-white" title="Maison Lila" />
          <p className="text-gray-400 text-sm">
            Welcome to Maison Lila we are located in Mivida we accepting order
            form 8:AM to 10:PM
          </p>
          <MediaLinks />
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