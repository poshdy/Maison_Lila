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
    <section className="w-full">
      <h2 className="text-2xl font-bold">Oops Something went wrong!</h2>
      <Button onClick={() => reset()}>Please Try again</Button>
    </section>
  );
}
