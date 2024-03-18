import React from "react";

type Props = {};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <section className="mx-auto w-[95%] py-3 px-2">{children}</section>;
};

export default Wrapper;
