import Link from "next/link";
import { ModeToggle } from "@/components";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <nav className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4 text-sm lg:gap-6 w-full">
            <Link
              href="/"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Home
            </Link>
            <Link
              href="/tutorial"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Tutorial
            </Link>
          </div>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
};

export default Header;
