import { getData } from "@/fetchers";
import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { User2 } from "lucide-react";
import { Separator } from "../ui/separator";

type Props = {

};

const Users = async (props: Props) => {
  const users = await getData("/manager/user");
  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-3">
          <User2 className=" rounded-sm p-1 bg-violet-400/80  w-8 h-8 text-black" />
          <h3 className="text-lg font-semibold">Users</h3>
        </div>
        <Separator />
      </CardHeader>
      <CardContent className="flex gap-5 items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="font-semibold">{users ? users?.length : null}</span>
          <h4 className="text-base text-gray-500">Total Users</h4>
        </div>
      </CardContent>
    </Card>
  );
};

export default Users;
