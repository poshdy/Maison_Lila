import RegisterForm from "@/components/Auth/RegisterForm";
import Heading from "@/components/Shared/Heading";
import React from "react";
import Link from "next/link";
import { Alert } from "@/components/ui/alert";
import AlertMessage from "@/components/models/alert";
type Props = {};

const RegisterPage = (props: Props) => {
  return (
    <section className="w-[90%] flex flex-col items-center h-screen mx-auto space-y-4 ">
      <AlertMessage />
      <Heading size="text-3xl" title="Create Account" />
      <RegisterForm />
      <span className="text-gray-400">
        Already Have an Account?
        <Link className="font-bold ml-1" href={"Login"}>
          Login
        </Link>
      </span>
    </section>
  );
};

export default RegisterPage;
