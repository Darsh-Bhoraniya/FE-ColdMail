import ColdmailLogo from "@/assets/coldmail.png";
import Container from "@/section/LandingPage/section/Container";
import { Link } from "react-router-dom";

const LandingFooter = () => {
  return (
    <footer className="border-t border-slate-100 py-8 text-sm text-slate-500 dark:border-slate-800">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <img
            src={ColdmailLogo}
            alt="Coldmails.ai Logo"
            className="h-8 w-8 rounded-lg object-cover shadow-md"
          />
          <span>© {new Date().getFullYear()} coldmails.ai</span>
        </div>
        <nav className="flex items-center gap-4">
          <Link
            to="/pricing"
            className="hover:text-slate-700 dark:hover:text-slate-300"
          >
            Pricing
          </Link>
          <a
            href="#solution"
            className="hover:text-slate-700 dark:hover:text-slate-300"
          >
            Solution
          </a>
          <a
            href="mailto:hello@coldmails.ai"
            className="hover:text-slate-700 dark:hover:text-slate-300"
          >
            Contact us
          </a>
        </nav>
      </Container>
    </footer>
  );
};

export default LandingFooter;
