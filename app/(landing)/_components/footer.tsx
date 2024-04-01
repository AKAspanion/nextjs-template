import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full p-4 border-t ">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <div className="flex items-center justify-between w-full">
          <Link href="/privacy">
            <Button size="sm" variant="ghost">
              Privacy Policy
            </Button>
          </Link>
          <Link href="/terms">
            <Button size="sm" variant="ghost">
              Terms of Service
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
