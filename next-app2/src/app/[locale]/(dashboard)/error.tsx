"use client";

import { useEffect } from "react";

interface PageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: PageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
