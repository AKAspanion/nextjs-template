"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";

export const Navbar = () => {
  const { user } = useUser();
  const pathname = usePathname();
  return (
    <div className="fixed hidden sm:flex z-10 bg-background top-0 w-full h-16 border-b shadow-sm items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full px-8">
        <Logo to="/dashboard" />
        <div className="hidden sm:flex items-center pl-8">
          <Link href="/dashboard">
            <Button
              className={pathname.startsWith("/dashboard") ? "underline" : ""}
              variant="link"
            >
              Dashboard
            </Button>
          </Link>
          <Link href="/">
            <Button
              className={pathname === "/" ? "underline" : ""}
              variant="link"
            >
              Landing
            </Button>
          </Link>
        </div>
        <div className="flex-1" />
        <div className="flex items-center gap-4">
          {user ? (
            <Link className="hidden sm:block" href="/profile">
              <Image
                className="rounded-full"
                src={user?.imageUrl}
                alt="Profile logo"
                height={36}
                width={36}
              />
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};
