import React from "react";

type Props = {};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="space-y-6 w-[90%] mx-auto">{children}</section>
  );
};

export default Wrapper;
