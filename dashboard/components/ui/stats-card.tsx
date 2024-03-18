import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Heading from "./heading";
import { Separator } from "./separator";
type Props = {
  Icon: any;
  title: string;
  text: string;
  data: any;
};

const StatsCard = ({ Icon, data, title, text }: Props) => {
  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-3">
          <div className=" rounded-full p-2 bg-main  w-10 h-10 text-white">
            <Icon />
          </div>
          <Heading title={title} className="text-lg" />
        </div>
        <Separator />
      </CardHeader>
      <CardContent className="flex gap-5 items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-400">{text}</span>
          <Heading title={data} className="text-3xl text-main" />
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
