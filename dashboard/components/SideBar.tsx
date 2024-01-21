import { SIDE_BAR_ITEMS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <section className="space-y-2 p-3 flex flex-col h-full justify-between bg-[#ffffff] text-gray-500 -z-10">
      <h1 className="text-3xl px-3 font-bold tracking-tighter leading-tight text-pink-400">
        Maison Lila
      </h1>

      <nav className="space-y-1 px-3 flex-1">
        {SIDE_BAR_ITEMS.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={cn(
              "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-[#e4e4e4] hover:rounded-md hover:text-pink-400 transition"
            )}
          >
            <div className="flex-1 items-center flex">
              <item.Icon className=" mr-3 w-6 h-6" />
              {item.name}
            </div>
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default SideBar;
