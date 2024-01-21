"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
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
import { AlertModal } from "@/components/models/alert-model";
import { SliderColumn } from "@/types";
import { SliderFormValues, SliderSchema } from "@/Schemas";
import { Create, Update, onDelete } from "@/actions/shared";
import FormHeader from "@/components/ui/FormHeader";
import {
  Select,
  SelectContent,
  SelectValue,
  SelectTrigger,
  SelectItem,
} from "@/components/ui/select";
import { POSITIONS } from "@/constants";

interface SliderFormProps {
  initialData: SliderColumn | null;
}

export const SliderForm: React.FC<SliderFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const title = initialData ? "Edit Slider" : "Create Slider";
  const description = initialData ? "Edit a Slider." : "Add a new Slider";
  const toastMessage = initialData ? "Slider updated." : "Slider created.";
  const action = initialData ? "Save changes" : "Create";

  const form = useForm<SliderFormValues>({
    resolver: zodResolver(SliderSchema),
    defaultValues: initialData || {
      name: "",
      place: "",
    },
  });

  let isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: SliderFormValues) => {
    try {
      if (initialData) {
        await Update("/slider", params.sliderId, data);
      } else {
        await Create("/slider", data);
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
        onConfirm={() => onDelete("/slider", params.sliderId, router, setOpen)}
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slider name</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="Slider name"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="place"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slider Position</FormLabel>
                <FormControl>
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
                          placeholder="Select the position of the Slider"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {POSITIONS.map((pos, i) => (
                        <SelectItem key={i} value={pos}>
                          {pos}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            variant={"lila"}
            disabled={isLoading}
            className="ml-auto"
            type="submit"
          >
            {action}
          </Button>
        </form>
      </Form>
    </>
  );
};
