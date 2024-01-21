"use client";
import React from "react";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { formSchema } from "@/Schemas";
import axios from "axios";
import { AdminStore } from "@/zustand/use-admin-store";
import { useRouter } from "next/navigation";

const Login = () => {
  const { setAdmin } = AdminStore();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  let isLoading = form.formState.isSubmitting;
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/manager/login`,
        data,
        { withCredentials: true }
      );
      setAdmin(response.data);
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
    } finally {
      form.reset();
    }
  };

  return (
    <section className="h-screen flex justify-center items-center">
      <Card className="flex flex-col items-center space-y-3">
        <CardHeader className="font-bold text-2xl leading-tight tracking-tighter">
          Maison Lila Dashboard
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              className="w-full space-y-3"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Please write you email" {...field} />
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
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className="w-full"
                variant={"lila"}
                disabled={isLoading}
                type="submit"
              >
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default Login;
