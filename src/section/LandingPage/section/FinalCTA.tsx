import Container from "@/section/LandingPage/section/Container";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="relative py-14">
      {/* animated gradient backdrop */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-40 blur-[90px]">
        <div className="mx-auto h-full w-3/4 rounded-full bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500 animate-bg-pan" />
      </div>

      <Container>
        <div className="glass shadow-glow mx-auto max-w-3xl rounded-2xl p-6 text-center">
          <h3 className="text-2xl font-semibold">
            Ready to automate cold email ops?
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Buy domains, create mailboxes, warm safely and sync to your tools in
            minutes.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <Link to="/createAcct">
              <div className="btn-gradient btn-shine inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold">
                Get Started
                <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </Link>

            <Link
              to="/pricing"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              View pricing
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
