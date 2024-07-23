import { Figtree } from "next/font/google";

const figTree = Figtree({ subsets: ["latin"] });
export default function HafzaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className={figTree.className}>
        <div className="bg-gray-300">{children}</div>
      </main>
    </>
  );
}
