"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";

import { useAuthModel } from "@/zustand/auth-store";
import AuthForm from "../Auth/AuthForm";
import LoginForm from "../Auth/LoginForm";

export const Auth = () => {
  const proModal = useAuthModel();

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent className="flex flex-col items-center gap-2">
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold text-xl">
              Account
            </div>
          </DialogTitle>
        </DialogHeader>
        <section>
          <Tabs className="" defaultValue="Sign-up">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="Sign-up">Create an Account</TabsTrigger>
              <TabsTrigger value="Login">Login</TabsTrigger>
            </TabsList>
            <TabsContent value="Sign-up">
              <AuthForm />
            </TabsContent>
            <TabsContent value="Login">
              <LoginForm />
            </TabsContent>
          </Tabs>
        </section>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
