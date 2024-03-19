import React from "react";

type Props = {};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <section className="mx-auto space-y-5 w-[95%] py-3 px-2">{children}</section>;
};

export default Wrapper;
