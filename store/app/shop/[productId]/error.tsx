"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="w-full h-[80vh] flex items-center gap-3 justify-center flex-col">
      <h2 className="text-2xl font-bold">Oops Something went wrong!</h2>
      <Button variant={"action"} onClick={() => reset()}>
        Please Try again
      </Button>
    </section>
  );
}
