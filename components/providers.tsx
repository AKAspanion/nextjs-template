"use client";

import { AppProgressBar } from "next-nprogress-bar";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import ConfirmProvider from "./confirm/ConfirmContext";
import { Suspense } from "react";
import { CounterStoreProvider } from "@/store/counter/provider";

export function Providers({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();
  return (
    <ClerkProvider
      appearance={{
        baseTheme: resolvedTheme === "dark" ? dark : undefined,
      }}
    >
      <Suspense>
        <AppProgressBar
          height="3px"
          color="#32CD32"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </Suspense>
      <Suspense>
        <ConfirmProvider>
          <CounterStoreProvider>{children}</CounterStoreProvider>
        </ConfirmProvider>
      </Suspense>
    </ClerkProvider>
  );
}
