import { Baby } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar flex items-center justify-center">
      <span className="right-2 z-10 rounded-full bg-[#FEFCE9] p-3">
        <Baby className="size-10 stroke-yellow-950" />
      </span>
      <span className="-ml-8 flex gap-6 rounded-r-full bg-yellow-100 px-6 py-4 pl-12 text-[#A38C4E]">
        <a>course papers</a>
        <a>theory</a>
        <a>resume</a>
      </span>
    </nav>
  );
}
