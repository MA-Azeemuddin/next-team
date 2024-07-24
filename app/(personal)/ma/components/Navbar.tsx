import Link from "next/link";
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

export function Navbar() {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex gap-5 items-center">
        <div className="text-3xl font-bold">
          <Link href="/">edGain</Link>
        </div>
        <div className="flex  ml-10 gap-5">
          <Link href="/">Examples</Link>
          <Link href="/ma/one">One</Link>
          <Link href="/">Components</Link>
        </div>
      </div>
      <div className="flex gap-8">
        <button className=" border-[#121117] border px-6 rounded-lg hover:opacity-25">
          <span>Log in</span>
        </button>
      </div>
    </div>
  );
}
