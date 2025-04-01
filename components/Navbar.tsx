import { Baby } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar absolute flex w-max items-center justify-center py-6 pl-12">
      <span className="right-2 z-10 rounded-full bg-[#FEFCE9] p-3 shadow-md">
        <Baby className="size-10 stroke-yellow-950" />
      </span>
      <span className="-ml-8 flex gap-6 rounded-r-full bg-yellow-100 px-6 py-4 pl-12 text-[#A38C4E] shadow-md">
        <a href="#">Course Papers</a>
        <a href="#">Theory</a>
        <a href="#">Resume</a>
        <a href="#">Domains</a>
      </span>
    </nav>
  );
}
