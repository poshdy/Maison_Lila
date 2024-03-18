"use client";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUser } from "@/zustand/user-store";
import React from "react";

type Props = {};

const UserDetails = (props: Props) => {
  const { user } = useUser();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
        <CardDescription>{user?.email}</CardDescription>
      </CardHeader>
    </Card>
  );
};

export default UserDetails;
