import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

export default function MaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={figtree.className}>
        <div className="bg-slate-50 shadow-md px-8 py-5">
        </div>
        {children}
      </main>
    </>
  );
}
