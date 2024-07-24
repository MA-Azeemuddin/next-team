import Link from "next/link";
import { Figtree } from "next/font/google";
import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";

const figtree = Figtree({ subsets: ["latin"] });

export function Navbar() {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex gap-5 items-center">
        <div className="text-3xl font-bold">
          <Link href="/">edGain</Link>
        </div>
        <div className="flex  ml-10 gap-5">
          <Link href="/ma/docs">Docs</Link>
          <Link href="/ma/one">One</Link>
          <Link href="/ma/settings">Settings</Link>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <Button variant="outline">Log in</Button>
        <CircleUserRound className="w-4 h-4" />
      </div>
    </div>
  );
}
