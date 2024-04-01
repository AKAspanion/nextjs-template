"use client";
import Link from "next/link";
import Image from "next/image";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { DarkModeToggle } from "@/components/theme/dark-mode-toggle";
import { ClerkLoading, ClerkLoaded, UserButton, useUser } from "@clerk/nextjs";
import Spinner from "@/components/ui/spinner";

export const Navbar = () => {
  const { user } = useUser();
  return (
    <div className="fixed top-0 w-full h-16 px-8 border-b shadow-sm flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex gap-6 items-center w-full">
        <Logo to="/dashboard" />
        {user ? (
          <Link href={"/dashboard"} className="hover:underline pt-1">
            <div className="text-sm">Go to App</div>
          </Link>
        ) : null}
        <div className="flex-1" />
        <div className="flex items-center gap-4">
          <DarkModeToggle />
          {user ? (
            <>
              <Link href="/profile">
                <Image
                  className="rounded-full"
                  src={user?.imageUrl}
                  alt="Profile logo"
                  height={36}
                  width={36}
                />
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-4 w-full justify-between md:justify-end">
              <ClerkLoading>
                <div className="w-10">
                  <Spinner />
                </div>
              </ClerkLoading>
              <ClerkLoaded>
                <Link href="/sign-in">
                  <Button size="sm" variant="outline">
                    Login
                  </Button>
                </Link>
                <div className="flex gap-4 items-center justify-center">
                  <Link href="/sign-up">
                    <Button size="sm">Sign up</Button>
                  </Link>
                </div>
              </ClerkLoaded>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
