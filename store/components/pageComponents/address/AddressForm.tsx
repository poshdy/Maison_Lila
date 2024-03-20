"use client";
import { AddressFormValue, AddressSchema } from "@/Schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Client } from "@/axiosClient";
import { useUser } from "@/zustand/user-store";
import { useRouter } from "next/navigation";
import { Zone } from "@/types";
import { AddressStore } from "@/zustand/address-store";
import toast from "react-hot-toast";

type Props = {
  zone: Zone[];
};
const AddressForm = ({ zone }: Props) => {
  const { push } = useRouter();
  const { setAddress } = AddressStore();
  const { user } = useUser();
  console.log(user.accessToken);
  const form = useForm<AddressFormValue>({
    resolver: zodResolver(AddressSchema),
  });
  const onSubmit = async (data: AddressFormValue) => {
    try {
      const res = await Client.post("/address", {
        streetName: data.streetName,
        BuildingNo: data.BuildingNo,
        zoneId: data.zoneId,
        apartmentNo: data.apartmentNo,
        Floor: data.Floor,
        userId: user?.id,
      });
      console.log(res.data);
      setAddress({
        zone: {
          id: res?.data?.zone?.id,
          fees: res?.data?.zone?.fees,
          name: res?.data?.zone?.name,
        },
        apartmenNo: data.apartmentNo,
        BuildingNo: data.BuildingNo,
        city: "Cairo",
        Floor: data.Floor,
        streetName: data.streetName,
        userId: res?.data?.user?.id,
        id: res?.data?.id,
      });
      push("/order/review");
      form.reset();
    } catch (error) {
      toast.error("Some went Wrong Please Try again");
      console.log(error);
    }
  };
  return (
    <section>
      <Form {...form}>
        <form
          className="grid grid-cols-4 px-2 gap-x-2 gap-y-3"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="streetName"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Street Name</FormLabel>
                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="BuildingNo"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Building No</FormLabel>
                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="Floor"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Floor</FormLabel>
                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="apartmentNo"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Apartment / Unit</FormLabel>
                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zoneId"
            render={({ field }) => (
              <FormItem className="col-span-4">
                <FormLabel>Zone</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-[165px]">
                      <SelectValue
                        className="w-10"
                        defaultValue={field.value}
                        placeholder="Select your zone"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {zone &&
                        zone?.map((zone: Zone) => (
                          <SelectItem key={zone.id} value={zone?.id}>
                            {zone?.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            variant={"action"}
            className="col-span-4 w-full"
            type="submit"
          >
            Continue
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default AddressForm;
