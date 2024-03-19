import { Loader } from "lucide-react";
import React from "react";

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
