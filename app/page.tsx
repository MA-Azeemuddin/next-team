import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-5">
        Welcome to our <span className="text-teal-400"> Next.js</span> project
      </h1>
      <h1 className="text-6xl font-bold">The React Framework for the Web</h1>

      <p className="mt-6 text-center text-gray-600">
        bootstrapped with
        <code className="rounded-md bg-gray-100 p-3 font-mono text-sm">
          create-next-app@latest
        </code>
      </p>

      <div className="flex flex-col mt-10 justify-center">
        <h1 className="text-gray-500 text-4xl font-bold">
          Check out our work by visiting following areas
        </h1>
        <div className="flex flex-row gap 10 items-center justify-between p-12">
          <Link href="/hafza">
            <p className="text-violet-500 text-4xl font-bold">Hafza</p>
          </Link>
          <Link href="/ayesha">
            <p className="text-red-500 text-4xl font-bold">Ayesha</p>
          </Link>
          <Link href="/ma">
            {" "}
            <p className="text-blue-500 text-4xl font-bold">MA</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
