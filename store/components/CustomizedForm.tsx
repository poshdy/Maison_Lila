"use client";
import ImageUpload from "@/components/ui/image-upload";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { CustomziedFormValues, CustomziedSchema } from "@/Schemas/index";
import { Input } from "@/components/ui/input";
import { Client } from "@/axiosClient";
import { useNoticationModel } from "@/zustand/notification-store";
type Props = {};

const CustomizedForm = (props: Props) => {
  // const { onOpen } = useNoticationModel();
  const form = useForm<CustomziedFormValues>({
    resolver: zodResolver(CustomziedSchema),
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (data: CustomziedFormValues) => {
    try {
      await Client.post("/special-order", data);
      // onOpen(
      //   "We Recieved Your Message We Will Get In Touch As soon As Possible",
      //   `Thank You, ${data?.name}!`
      // );
      form.reset();
    } catch (error: any) {
    } finally {
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-4 gap-x-2 gap-y-4  "
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input {...field} type="text" />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="phone"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-4">
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input className="w-full" {...field} type="tel" />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="image"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full space-y-[-8px] col-span-4">
              <FormLabel>Give Us A Sample</FormLabel>
              <FormControl>
                <ImageUpload
                  value={field?.value ? [field?.value] : []}
                  disabled={isLoading}
                  onChange={(url) => field.onChange(url)}
                  onRemove={() => field.onChange("")}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          name="message"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-4">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What is in your mind?"
                  {...field}
                  className="w-full col-span-4"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button variant={"action"} className="w-full col-span-4" type="submit">
          Send Message
        </Button>
      </form>
    </Form>
  );
};

export default CustomizedForm;
