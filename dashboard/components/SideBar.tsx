import { SIDE_BAR_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Heading from "./ui/heading";

const SideBar = () => {
  return (
    <aside className="space-y-2 p-3 flex flex-col h-full justify-between text-gray-400">
      <Heading
        title="Maison Lila"
        className="text-3xl px-3 tracking-tighter text-pink-500 leading-tight"
      />

      <nav className="space-y-1 px-2 flex-1">
        {SIDE_BAR_ITEMS.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={cn(
              "text-sm group flex p-2 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-[#e4e4e4] hover:rounded-md hover:text-pink-400 transition"
            )}
          >
            <div className="flex-1 items-center flex">
              <item.Icon className=" mr-3 w-5 h-5" />
              {item.name}
            </div>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
