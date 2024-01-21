import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AuthForm from "./AuthForm";
import LoginForm from "./LoginForm";
type Props = {};

const AuthTabs = (props: Props) => {
  return (
    <Tabs className="" defaultValue="Sign-up">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Sign-up">Create an Account</TabsTrigger>
        <TabsTrigger value="Login">Login</TabsTrigger>
      </TabsList>
      <TabsContent value="Sign-up">
        <AuthForm />
      </TabsContent>
      <TabsContent value="Login">
        <LoginForm/>
      </TabsContent>
    </Tabs>
  );
};

export default AuthTabs;
