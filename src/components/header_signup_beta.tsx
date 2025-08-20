// components/Header.tsx
import Link from "next/link";
import BetaSignupPopover from "@/components/popover";

export default function Header() {
  return (
    <header className="w-full bg-[#1a1a1a] text-white px-4 sm:px-6 py-2 sm:py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="flex items-center gap-1 sm:gap-2 cursor-pointer"
        >
          <img
            src="/img/logo_owl.png"
            alt="Scribeverse Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-15 lg:h-15 flex-shrink-0"
          />
          <img
            src="/img/logo_text.png"
            alt="Scribeverse Text"
            className="w-40 h-8 sm:w-50 sm:h-10 lg:w-70 lg:h-15 flex-shrink-0"
          />
        </Link>
      </div>

      {/* Mobile Navigation */}
      <nav className="flex sm:hidden items-center gap-2">
        <BetaSignupPopover>
          <button className="text-yellow-500 font-semibold text-xs px-2 py-1 border border-yellow-500 rounded">
            join beta
          </button>
        </BetaSignupPopover>
        <Link
          href="https://ko-fi.com/scribeverse"
          target="_blank"
          className="text-white hover:text-yellow-500 text-xs px-2 py-1 border border-white rounded"
        >
          support
        </Link>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex items-center gap-2 md:gap-3 text-xs sm:text-sm">
        <BetaSignupPopover>
          <Link
            href="/"
            className="text-yellow-500 font-semibold whitespace-nowrap"
          >
            join beta waitlist
          </Link>
        </BetaSignupPopover>
        <span className="text-white">|</span>
        <Link
          href="https://ko-fi.com/scribeverse"
          target="_blank"
          className="hover:text-yellow-500 whitespace-nowrap"
        >
          support us
        </Link>
        <span className="text-white">|</span>
        <Link
          href="/#contact"
          className="hover:text-yellow-500 whitespace-nowrap"
        >
          contact
        </Link>
      </nav>
    </header>
  );
}
