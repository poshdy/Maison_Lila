import React from "react";
import { Heading } from "../Heading";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

type Props = {
  title: string;
  description: string;
  initialData: any;
  setOpen: any;
  isLoading: boolean;
};

const FormHeader = ({
  description,
  initialData,
  title,
  isLoading,
  setOpen,
}: Props) => {
  return (
    <div className="flex items-center justify-between">
      <Heading title={title} description={description} />
      {initialData && (
        <Button
          disabled={isLoading}
          variant="destructive"
          size="sm"
          onClick={() => setOpen(true)}
        >
          <Trash className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default FormHeader;
