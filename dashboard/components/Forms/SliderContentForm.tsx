"use client";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import ImageUpload from "@/components/ui/image-upload";
import { Input } from "@/components/ui/input";
import { SliderColumn, SliderContentColumn } from "@/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";
import { Client } from "@/axiosClient";
import { SliderContentFormValues, SliderContentSchema } from "@/Schemas";
import FormHeader from "@/components/ui/FormHeader";
import { AlertModal } from "@/components/models/alert-model";
import { useState } from "react";
import { Create, Update, onDelete } from "@/actions/shared";
import { Separator } from "@/components/ui/separator";

type Props = {
  initialData: SliderContentColumn | null;
  sliders: SliderColumn[];
};

const SliderContentForm = ({ initialData, sliders }: Props) => {
  const router = useRouter();
  const params = useParams();
  const [open, setOpen] = useState(false);

  const title = initialData ? "Edit Slider Content" : "Create Slider Content";
  const description = initialData
    ? "Edit a Slider Content."
    : "Add a new Slider Content";
  const toastMessage = initialData
    ? "Slider Content updated."
    : "Slider Content created.";
  const action = initialData ? "Save changes" : "Create";

  const form = useForm<SliderContentFormValues>({
    resolver: zodResolver(SliderContentSchema),
    defaultValues: initialData || {
      text: "",
      sliderId: "",
      title: "",
      image: "",
    },
  });

  let isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: SliderContentFormValues) => {
    try {
      if (initialData) {
        await Update("/content", params.sliderContentId, data);
      } else {
        await Create("/content", data);
      }
      router.refresh();
      router.push(`/sliders`);
      toast.success(toastMessage);
    } catch (error: any) {
      toast.error("Something went wrong.");
    } finally {
    }
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={() =>
          onDelete("/content", params.sliderContentId, router, setOpen)
        }
        loading={isLoading}
      />
      <FormHeader
        title={title}
        initialData={initialData}
        description={description}
        isLoading={isLoading}
        setOpen={setOpen}
      />
      <Separator />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >
          <FormField
            control={form.control}
            name="sliderId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slider name</FormLabel>
                <Select
                  disabled={isLoading}
                  onValueChange={field.onChange}
                  value={field.value}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        defaultValue={field.value}
                        placeholder="Select a Slider name"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {sliders.map((slider) => (
                      <SelectItem key={slider.id} value={slider.id}>
                        {slider.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="Order now..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="text"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slider text</FormLabel>
                <FormControl>
                  <Input
                    className="h-20"
                    disabled={isLoading}
                    placeholder="...."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slider name</FormLabel>
                <FormControl>
                  <ImageUpload
                    value={field.value ? [field.value] : []}
                    disabled={isLoading}
                    onChange={(url) => field.onChange(url)}
                    onRemove={() => field.onChange("")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            disabled={isLoading}
            className="w-full"
            variant={"lila"}
            type="submit"
          >
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SliderContentForm;
