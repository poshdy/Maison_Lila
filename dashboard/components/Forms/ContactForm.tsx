"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Heading } from "@/components/Heading";
import { AlertModal } from "@/components/models/alert-model";
import ImageUpload from "@/components/ui/image-upload";
import { ContactColumn } from "@/types";
import { ContactFormValues, ContactSchema } from "@/Schemas";
import { Client } from "@/axiosClient";

interface ContactFormProps {
  initialData: ContactColumn | null;
}

 const ContactForm: React.FC<ContactFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const title = initialData ? "Edit Contact" : "Create Contact";
  const description = initialData ? "Edit a Contact." : "Add a new Contact";
  const toastMessage = initialData ? "Contact updated." : "Contact created.";
  const action = initialData ? "Save changes" : "Create";

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
    defaultValues: initialData || {
      email: "",
      facebook: "",
      instagram: "",
      phone: "",
      tiktok: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        await Client.patch(`/contact/${params.contactId}`, data);
      } else {
        await Client.post(`/Contact`, data);
      }
      router.refresh();
      router.push(`/contact`);
      toast.success(toastMessage);
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      await Client.delete(`/Contact/${params.contactId}`);
      router.refresh();
      router.push(`/contact`);
      toast.success("Contact deleted.");
    } catch (error: any) {
      toast.error(
        "Make sure you removed all categories using this Contact first."
      );
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input disabled={loading} placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="md:grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="facebook"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facebook Page</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Paste link"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="md:grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="instagram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram Page</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Paste link"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="md:grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="tiktok"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tiktok</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Paste Link"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="md:grid md:grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="010" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ContactForm