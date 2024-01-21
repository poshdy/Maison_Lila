import Login from "@/components/Login";
import React from "react";

const UnAuthorizedPage = () => {
  return (
    <section className="w-full h-screen bg-green-950 flex items-center justify-center">
      <Login />
    </section>
  );
};

export default UnAuthorizedPage;
