import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"] });

export default function MaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className={figtree.className}>{children}</main>
    </>
  );
}
