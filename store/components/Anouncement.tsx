import React from "react";
import Marquee from "react-fast-marquee";
type Props = {};

const Anouncement = (anoun: any) => {
  return (
    <section className="bg-main h-10 w-full">
      <Marquee
        gradient={false}
        className="text-white flex items-center h-full justify-center"
        autoFill
        speed={70}
      >
        <h1>{anoun?.anoun?.text}</h1>
      </Marquee>
    </section>
  );
};

export default Anouncement;
