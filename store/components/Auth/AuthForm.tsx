"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormField,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { formSchema } from "./authSchema";
import { Button } from "@/components/ui/button";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import axios from "axios";
import { useUser } from "@/zustand/user-store";
import { useNoticationModel } from "@/zustand/notification-store";
import toast from "react-hot-toast";
type Props = {};

const AuthForm = (props: Props) => {
  const {onOpen} = useNoticationModel()
  const { SetUser } = useUser();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  let isLoading = form.formState.isSubmitting;
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const res = await axios.post(
        `${process.env.BASE_URL}/auth/sign-up`,
        data,
        { withCredentials: true }
      );
      SetUser(res.data);
     onOpen("Your account is created successfully",`Thank You!`)
    } catch (error: any) {
      toast.error("Something Went Wrong")
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>name</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="" {...field} />
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
                  <Input placeholder="Please write you email" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button variant={"action"} className="w-full" disabled={isLoading} type="submit">
            create account
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default AuthForm;
