import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

type Props = {
  status: string | null;
  name: string | null;
  id: string | null;
};

const Header = ({ name, id }: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardDescription className="text-sm text-gray-400">Order no {id}</CardDescription>
        <CardTitle className="text-black font-bold">Thank you, {name}</CardTitle>
      </CardHeader>
    </Card>
  );
};

export default Header;
