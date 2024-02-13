import React from "react";

type Props = {};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="space-y-10 md:space-y-20 w-[95%]  mx-auto">{children}</section>
  );
};

export default Wrapper;
