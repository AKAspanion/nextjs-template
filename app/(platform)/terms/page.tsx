import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

const TermsPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="p-6 w-full">
        <Link href={"/"}>
          <Button variant="ghost" size="icon">
            <ArrowLeftIcon />
          </Button>
        </Link>
      </div>
      <pre className="w-[calc(100vw)] h-[calc(100vh-88px)] overflow-auto">
        {`    Terms of Service`}
      </pre>
    </div>
  );
};

export default TermsPage;
