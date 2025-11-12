import Container from "@/section/LandingPage/section/Container";
import { GlowCard } from "@/shared/ui/effects/GlowCard";
import { ShineButton } from "@/shared/ui/effects/ShineButton";
import { ChevronRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-14">
      <Container className="grid items-center gap-10 py-4 md:grid-cols-2 md:gap-12 lg:py-20">
        <div className="fade-up">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-slate-700 shadow-sm dark:border-slate-700/60 dark:bg-slate-900/40 dark:text-slate-200">
              <ShieldCheck className="h-3.5 w-3.5" /> Better deliverability,
              less spam
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="gradient-text">
              Automate domains, mailboxes & warm-up
            </span>
            - in minutes
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
            Seamless Onboarding: Buy, Configure, Warm, and Sync All in One Place
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/createAcct">
              <ShineButton
                className="btn-shine shadow-glow"
                asLinkClassName="flex flex-1 items-center"
              >
                Get Started
                <ChevronRight className="ml-1 h-4 w-4" />
              </ShineButton>
            </Link>

            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* KPI preview with glow */}
        <div className="relative animate-float fade-up md:scale-105">
          <GlowCard className="glass shadow-glow rounded-2xl">
            <div className="border-b border-slate-200 p-5 dark:border-slate-700">
              <div className="text-xl font-bold">Dashboard</div>
              <div className="mt-1 text-sm text-slate-500">
                Last 7 days · Coldmail Boxes + Google Workspace + Microsoft
                Outlook
              </div>
            </div>
            <div className="grid gap-4 p-5 sm:grid-cols-3">
              <Stat
                label="Active Domains"
                value="403"
                accent="+1.2% this week"
              />
              <Stat
                label="Active Mailboxes"
                value="1208"
                accent="+3.5% trending"
              />
              <Stat label="Next Billing" value="$3978" accent="+11.3% safer" />
            </div>
          </GlowCard>
        </div>
      </Container>
    </section>
  );
};

interface StatProps {
  label: string;
  value: string;
  accent?: string;
}

function Stat({ label, value, accent }: StatProps) {
  return (
    <div className="rounded-xl border border-slate-200 glass p-5 shadow-sm dark:border-slate-700">
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-xs text-slate-500">{label}</div>
      {accent && (
        <div className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">
          {accent}
        </div>
      )}
    </div>
  );
}

export default Hero;
