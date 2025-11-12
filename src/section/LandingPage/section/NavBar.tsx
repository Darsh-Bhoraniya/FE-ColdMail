import ColdmailLogo from "@/assets/coldmail.png";
import Container from "@/section/LandingPage/section/Container";
import NavBarMobile from "@/section/LandingPage/section/NavBarMobile";
import { ShineButton } from "@/shared/ui/effects/ShineButton";
import { ThemeToggle } from "@/shared/ui/ThemeToggle";
import { SHARED_CONTENT } from "@/utils/constants";
import { ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/50 bg-white/70 backdrop-blur-md dark:border-slate-800/60 dark:bg-slate-950/60">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={ColdmailLogo}
            alt="Coldmails.ai Logo"
            className="h-8 w-8 rounded-lg object-cover shadow-md"
          />

          <span className="text-base font-semibold tracking-tight">
            coldmails.ai
          </span>
        </Link>

        {/* DESKTOP VIEW */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            to="/pricing"
            className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            Pricing
          </Link>

          <a
            href="#solution"
            className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            Solution
          </a>

          <a
            href="/createAcct"
            className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            Register
          </a>

          <a
            target="_blank"
            href="https://calendly.com/devpatel379-dp/30min"
            className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            {SHARED_CONTENT.BOOK_DEMO}
          </a>

          <Link to="/createAcct">
            <ShineButton
              className="btn-shine shadow-glow"
              asLinkClassName="flex flex-1 items-center"
            >
              {SHARED_CONTENT.GET_STARTED}
              <ChevronRight className="ml-1 h-4 w-4" />
            </ShineButton>
          </Link>

          <ThemeToggle />
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-lg p-2 hover:bg-slate-100 md:hidden dark:hover:bg-slate-800"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* MOBILE VIEW */}
      {open && <NavBarMobile />}
    </header>
  );
};

export default NavBar;
