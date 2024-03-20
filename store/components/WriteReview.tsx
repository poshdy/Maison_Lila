"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import React from "react";
import { Client } from "@/axiosClient";
import { useUser } from "@/zustand/user-store";
import { useNoticationModel } from "@/zustand/notification-store";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReviewFormValues, ReviewSchema } from "@/Schemas";
import { useErrorModel } from "@/zustand/error-store";

type Props = {
  productId: string;
};

const WriteReview = ({ productId }: Props) => {
  const { user } = useUser();
  const { Display } = useNoticationModel();
  const { Display: open } = useErrorModel();
  const form = useForm<ReviewFormValues>({
    resolver: zodResolver(ReviewSchema),
  });

  const onSubmit = async (data: ReviewFormValues) => {
    try {
      const res = await Client.post("/review", {
        content: data.content,
        rating: data.rating,
        userId: user?.id,
        productId: productId,
      });
      Display("Thank you for your feedback", "THANK YOU!", "Go SHOPPING");
      form.reset();
    } catch (error) {
      open("Something went wrong", "Opps!");
    }
  };
  return (
    <section className="space-y-4">
      <Form {...form}>
        <form className="space-y-5 px-3" onSubmit={form.handleSubmit(onSubmit)}>
          <h3 className="text-2xl font-bold">Post a Review</h3>
          <FormField
            name="content"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    className="w-full"
                    placeholder="what is your opinion?"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            name="rating"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="ONE" />
                      </FormControl>
                      <FormLabel className="font-bold">ONE STAR</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="TWO" />
                      </FormControl>
                      <FormLabel className="font-bold">TWO STARS</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="THREE" />
                      </FormControl>
                      <FormLabel className="font-bold">THREE STARS</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="FOUR" />
                      </FormControl>
                      <FormLabel className="font-bold">FOUR STARS</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="FIVE" />
                      </FormControl>
                      <FormLabel className="font-bold">FIVE STARS</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">
            Post
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default WriteReview;
