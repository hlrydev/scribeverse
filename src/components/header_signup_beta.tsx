// components/Header.tsx
import Link from "next/link";
import BetaSignupPopover from "@/components/popover";

export default function Header() {
  return (
    <header className="w-full bg-[#1a1a1a] text-white px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <img
            src="/img/logo_owl.png"
            alt="Scribeverse Logo"
            className="w-15 h-15"
          />
          <img
            src="/img/logo_text.png"
            alt="Scribeverse Text"
            className="w-70 h-15"
          />
        </Link>
      </div>
      <nav className="flex items-center gap-3 text-sm">
        <BetaSignupPopover>
          <Link href="/" className="text-yellow-500 font-semibold">
            join beta waitlist
          </Link>
        </BetaSignupPopover>
        <span className="text-white">|</span>
        <Link
          href="https://ko-fi.com/scribeverse"
          target="_blank"
          className="hover:text-yellow-500"
        >
          support us
        </Link>
        <span className="text-white">|</span>
        <Link href="/#contact" className="hover:text-yellow-500">
          contact
        </Link>
      </nav>
    </header>
  );
}
