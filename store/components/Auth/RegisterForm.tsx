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
import { SignUpFormValues, SignUpSchema } from "@/Schemas";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@/zustand/user-store";
import { useNoticationModel } from "@/zustand/notification-store";
import { useAlert } from "@/zustand/alert-store";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/constants";
import axios from "axios";

const RegisterForm = () => {
  const { Display } = useAlert();
  const { push } = useRouter();
  const { SetUser } = useUser();
  const success = useNoticationModel();
  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(SignUpSchema),
  });
  let isLoading = form.formState.isSubmitting;
  const onSubmit = async (data: SignUpFormValues) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/sign-up`, data, {
        withCredentials: true,
      });
      SetUser(res.data.data);
      success.Display(
        `Welcome ${data?.name}`,
        "Your Account Is created Successfully, Thank you for choosing Mison Lila",
        "shop"
      );
      push("/");
      form.reset();
    } catch (error) {
      Display("Error", error?.response?.data);
      form.reset();
    }
  };
  return (
    <Form {...form}>
      <form
        className="space-y-4 w-[90%] mx-auto"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  disabled={isLoading}
                  placeholder="Please write you email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  disabled={isLoading}
                  placeholder="Please write you Name"
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
                  placeholder="Please write you Password"
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
          Create Account
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
