"use client";

import { Suspense } from "react";

function MyLittleComponent() {
  if (typeof window === "undefined") {
    throw new Error("This component is only available on the client side");
  }

  return <div>Client side only</div>;
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<div>Loading...</div>}>
        <MyLittleComponent />
      </Suspense>
    </main>
  );
}
