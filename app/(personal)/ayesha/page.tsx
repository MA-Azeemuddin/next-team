import Link from "next/link";

export default function Ayesha() {
  return (
    <div>
      <h1>This is Ayesha page</h1>
      <Link href="/">
        <button>Home</button>
      </Link>
      <Link href="/hafza">
        <button>Hafza</button>
      </Link>
    </div>
  );
}
