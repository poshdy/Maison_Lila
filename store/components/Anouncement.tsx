import React from "react";
import Marquee from "react-fast-marquee";
type Props = {
  anoun: {
    id: string;
    text: string;
  };
};

const Anouncement = ({ anoun }: Props) => {
  return (
    <section className="bg-black h-10 w-full">
      <Marquee
        gradient={false}
        className="text-white flex items-center h-full justify-center"
        autoFill
        speed={70}
      >
        <h1>{anoun?.text}</h1>
      </Marquee>
    </section>
  );
};

export default Anouncement;
