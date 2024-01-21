import React from "react";
import { Skeleton } from "../ui/skeleton";

type Props = {};

const UserPage = (props: Props) => {
  return (
    <section className="space-y-2">
      <Skeleton className="w-[90%] mx-auto h-[30vh]" />
      <Skeleton className="w-[90%] mx-auto h-[30vh]" />
    </section>
  );
};

export default UserPage;
