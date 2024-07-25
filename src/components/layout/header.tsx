import Link from "next/link";
import { ModeToggle } from "@/components";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <nav className="flex items-center justify-between w-full">
          <Sheet>
            <SheetTrigger>
              <Menu className="lg:hidden w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle className="text-left text-3xl font-black mb-8">
                  Base64
                </SheetTitle>
                <SheetDescription className="text-left">
                  <ul className="space-y-4">
                    <li>
                      <Link href="/" className="text-xl font-bold">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/tutorial" className="text-xl font-bold">
                        Tutorial
                      </Link>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <div className="hidden lg:flex items-center gap-4 text-sm lg:gap-6 w-full">
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
