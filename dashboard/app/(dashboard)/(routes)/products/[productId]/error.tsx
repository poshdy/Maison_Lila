"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong in product segment!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
