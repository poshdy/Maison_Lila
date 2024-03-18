"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormField,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { LoginFormValues, LoginSchema } from "@/Schemas";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@/zustand/user-store";
import axios from "axios";
import { BASE_URL } from "@/constants";
import { useAlert } from "@/zustand/alert-store";
import { useNoticationModel } from "@/zustand/notification-store";
import { useRouter } from "next/navigation";
type Props = {};

const LoginForm = (props: Props) => {
  const { Display } = useAlert();
  const { SetUser } = useUser();
  const success = useNoticationModel();
  const { push } = useRouter();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
  });
  let isLoading = form.formState.isSubmitting;
  const onSubmit = async (data: LoginFormValues) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, data, {
        withCredentials: true,
      });
      SetUser(res.data);
      success.Display(
        `Welcome Back ${res?.data?.name}`,
        "Logged In Successfully",
        "shop"
      );
      push("/");
    } catch (error: any) {
      const { data } = error?.response;
      Display("Error", data);
      form.reset();
    } finally {
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-[90%] mx-auto"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading}
                  type="email"
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
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
                  disabled={isLoading}
                  type="password"
                  placeholder="Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          variant={"action"}
          className="w-full"
          disabled={isLoading}
          type="submit"
        >
          Login
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
