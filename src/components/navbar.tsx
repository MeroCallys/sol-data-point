import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full h-16 flex justify-between items-center">
      <div className="w-1/5 h-full flex items-center justify-center ">
        <Link className="w-full text-center" href="/">
          <h1 className="text-2xl font-bold">SOL</h1>
        </Link>
      </div>
      <nav className="grow flex items-center justify-start text-sm gap-2 sm:gap-5">
        <Link href="/dashboard">DASHBOARD</Link>
        <Link href="/profiles">PROFILES</Link>
        <Link href="/orders">ORDERS</Link>
      </nav>
      <div className="w-1/5  flex justify-end items-center ">
        <div className="bg-slate-300 w-12 aspect-square rounded-full"></div>
      </div>
    </header>
  );
}
