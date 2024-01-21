import { NAVITEMS } from "@/constants";
import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Phone } from "lucide-react";

const MediaLinks = () => {
  return (
    <div className="flex flex-row md:self-end md:pb-3 items-center gap-2">
      <Facebook size={20} />
      <Instagram size={20} />
      <Phone size={20} />
    </div>
  );
};

export default MediaLinks;
