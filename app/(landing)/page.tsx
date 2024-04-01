"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ClerkLoaded, useUser } from "@clerk/nextjs";

const LandingPage = () => {
  const { user } = useUser();
  return (
    <div className="flex items-center justify-center flex-col pt-12">
      <div className={cn("flex items-center justify-center flex-col")}>
        <h1 className="uppercase text-3xl font-extralight md:text-6xl text-center text-neutral-800dark:text-neutral-200 mb-6">
          Your awesome app
        </h1>
      </div>
      <ClerkLoaded>
        {user ? null : (
          <Link href="/sign-up">
            <Button className="mt-6" size="lg">
              Join for free
            </Button>
          </Link>
        )}
      </ClerkLoaded>
    </div>
  );
};

export default LandingPage;
