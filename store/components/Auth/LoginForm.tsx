"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormItem,
  FormMessage,
  FormLabel,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { LoginFormValues, LoginSchema, formSchema } from "./authSchema";
import { Button } from "@/components/ui/button";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useUser } from "@/zustand/user-store";
import { useNoticationModel } from "@/zustand/notification-store";
type Props = {};

const LoginForm = (props: Props) => {
  const { onOpen } = useNoticationModel();
  const { SetUser } = useUser();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
  });
  let isLoading = form.formState.isSubmitting;
  const onSubmit = async (data: LoginFormValues) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
        data,
        { withCredentials: true }
      );
      SetUser(res.data);
      onOpen("", `Logged in Successfully!`);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      form.reset();
    }
  };
  return (
    <section>
      <Form {...form}>
        <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Please write you email"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Please write your Password"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button variant={"action"} className="w-full" disabled={isLoading} type="submit">
            Login
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default LoginForm;