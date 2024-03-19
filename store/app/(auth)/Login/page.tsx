import LoginForm from "@/components/Auth/LoginForm";
import Heading from "@/components/Shared/Heading";
import AlertMessage from "@/components/models/alert";
import Link from "next/link";
import React from "react";

type Props = {};

const LoginPage = (props: Props) => {
  return (
    <section className="w-[90%] flex flex-col items-center mt-2 mx-auto space-y-8">
      <AlertMessage />
      <Heading size="text-3xl" title="Login to your account" />
      <LoginForm />
      <span className="text-gray-400">
        New to Maison Lilaa
        <Link className="font-bold ml-1" href={"Register"}>
          Create Account
        </Link>
      </span>
    </section>
  );
};

export default LoginPage;
