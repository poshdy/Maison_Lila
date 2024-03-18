import React from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import ActionButton from "./NavigationButton";
import Text from "./Text";
import Heading from "./Heading";
type Props = {
  title?: string;
  text?: string;
  action?: string;
};

const Empty = ({ title, text, action }: Props) => {
  return (
    <section className="flex flex-col space-y-3 items-center justify-center h-[60vh] w-full">
      <ShoppingBag size={45} />
      <Heading title={title} size="text-2xl font-bold" />

      <Text text={text} size="text-base" />
      <ActionButton action="shop" title="GO SHOPPING" />
    </section>
  );
};

export default Empty;
