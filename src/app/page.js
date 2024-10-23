import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center w-80">
        <h1 className="text-xl">Hi There!</h1>
        <Link href="/users">
          <Button>Get Started</Button>
        </Link>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Developed By Abdullah Masulili</p>
      </footer>
    </div>
  );
}
