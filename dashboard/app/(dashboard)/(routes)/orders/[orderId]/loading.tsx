import React from "react";
import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <h3 className=" flex items-center gap-2">
        Loading <Loader />
      </h3>
    </section>
  );
};

export default Loading;
