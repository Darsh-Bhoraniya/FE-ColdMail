import Container from "@/section/LandingPage/section/Container";
import { ShineButton } from "@/shared/ui/effects/ShineButton";
import { ThemeToggle } from "@/shared/ui/ThemeToggle";
import { SHARED_CONTENT } from "@/utils/constants";
import { paths } from "@/utils/paths";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const NavBarMobile = () => {
  return (
    <div className="md:hidden">
      <Container className="py-3">
        <div className="flex flex-col gap-2">
          <Link
            to="/pricing"
            className="rounded-lg px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Pricing
          </Link>

          <a
            href="#solution"
            className="rounded-lg px-3 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Solution
          </a>

          <a
            target="_blank"
            href="https://calendly.com/devpatel379-dp/30min"
            className="text-sm px-3 py-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            {SHARED_CONTENT.BOOK_DEMO}
          </a>

          <div className="flex justify-between">
            <Link to={paths.auth.register}>
              <ShineButton
                className="btn-shine shadow-glow"
                asLinkClassName="flex flex-1 items-center"
              >
                Get Started
                <ChevronRight className="ml-1 h-4 w-4" />
              </ShineButton>
            </Link>

            <ThemeToggle />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NavBarMobile;
