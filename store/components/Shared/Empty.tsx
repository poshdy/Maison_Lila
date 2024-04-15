import React from "react";
import { TbMoodEmpty } from "react-icons/tb";
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
      <TbMoodEmpty size={45} />
      <Heading title={title} size="text-3xl font-bold" />
      <ActionButton action={action} title={text} />
    </section>
  );
};

export default Empty;
