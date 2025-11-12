import Container from "@/section/LandingPage/section/Container";
import {
  CheckCircle2,
  Cpu,
  Gauge,
  Lock,
  Shield,
  Workflow,
  Zap,
} from "lucide-react";
import { useRef, useState } from "react";

type Item = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  points: string[];
};

const ITEMS: Item[] = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "From domain to send—fast",
    desc: "Buy domains, wire DNS, spin up mailboxes, and start safe warmup without juggling 6 tabs.",
    points: [
      "One-click domain + DNS",
      "Google/Outlook mailboxes",
      "Warmup scheduler",
    ],
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Deliverability by default",
    desc: "SPF/DKIM/DMARC hardened, human-like pacing, built-in throttling and cooldowns.",
    points: ["Policy hardening", "Adaptive ramps", "Bounce/complaint guards"],
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: "Plays nice with your stack",
    desc: "Export to Instantly, HubSpot, Leadbeam, Lemlist—and pull telemetry back to your dashboard.",
    points: [
      "OAuth/SMTP passthrough",
      "Open/bounce/reply sync",
      "Daily health digests",
    ],
  },
];

export default function WhyChoose() {
  return (
    <section className="relative py-20 sm:py-24">
      {/* Soft grid + subtle blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-grid absolute inset-0" />
        <div className="aurora absolute left-[12%] top-10 h-64 w-64 animate-drift rounded-full" />
        <div className="aurora absolute right-[8%] top-20 h-56 w-56 animate-drift-mid rounded-full" />
      </div>

      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr,1.3fr] lg:gap-14">
          {/* Left: copy + CTA */}
          <div className="lg:sticky lg:top-28">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why choose <span className="gradient-text">coldmails.ai</span>?
            </h2>
            <p className="mt-3 max-w-md text-slate-600 dark:text-slate-300">
              Fewer tools, safer sending, better insights—automation that puts
              deliverability first.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              {[
                "End-to-end: buy → configure → warm → export",
                "Safety rails: pacing, throttles, policy hardening",
                "Telemetry: opens, bounces, spam, reply rate",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {t}
                  </span>
                </li>
              ))}
            </ul>

            {/*<div className="mt-8">
              <Link to="/register" className="btn-brand brand-gradient">
                Start free <ArrowRight className="h-4 w-4" />
              </Link>
              </div>*/}
          </div>

          {/* Right: cards */}
          <div className="space-y-5">
            {ITEMS.map((item, i) => (
              <SpotlightRow item={item} key={item.title} delay={i * 80} />
            ))}

            {/* Mini comparison */}
            <div
              className="reveal mt-4 grid gap-5 md:grid-cols-3"
              style={{ animationDelay: "140ms" }}
            >
              <CompareCard
                icon={<Gauge className="h-4 w-4" />}
                title="coldmails.ai"
                desc="Unified ops with built-in safety, less glue work, more signal."
                highlight
              />
              <CompareCard
                icon={<Cpu className="h-4 w-4" />}
                title="DIY scripts"
                desc="Fragile glue: APIs, DNS, auth, warming, rate-limits… lots to babysit."
              />
              <CompareCard
                icon={<Lock className="h-4 w-4" />}
                title="Generic warmers"
                desc="Only a slice of the pipeline—no domains, limited automation, thin telemetry."
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ----------------------------- Spotlight row ----------------------------- */

function SpotlightRow({ item, delay = 0 }: { item: Item; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [bg, setBg] = useState<string | undefined>();
  const [tilt, setTilt] = useState<{ rx: number; ry: number }>({
    rx: 0,
    ry: 0,
  });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    setBg(
      `radial-gradient(600px circle at ${x}px ${y}px, rgba(59,130,246,.14), transparent 45%)`
    );

    const px = (x / r.width) * 2 - 1;
    const py = (y / r.height) * 2 - 1;
    setTilt({ rx: py * -4, ry: px * 5 });
  }
  function onLeave() {
    setBg(undefined);
    setTilt({ rx: 0, ry: 0 });
  }

  return (
    <div className="reveal" style={{ animationDelay: `${delay}ms` }}>
      <div
        className="card-brand"
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{
          background: bg,
          transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transition: "transform 160ms ease",
        }}
      >
        <div className="p-5">
          <div className="flex items-start gap-4">
            <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900">
              {item.icon}
            </div>
            <div>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {item.desc}
              </p>

              <ul className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                {item.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500" />
                    <span className="text-slate-700 dark:text-slate-300">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Clean meter */}
              <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-200/70 dark:bg-slate-700">
                <div className="meter-brand h-full w-1/2 animate-shimmer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- Compare card ------------------------------ */

function CompareCard({
  icon,
  title,
  desc,
  highlight = false,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl p-5 transition",
        highlight
          ? "card-brand"
          : "border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900",
      ].join(" ")}
    >
      <div className="flex items-center gap-2">
        {icon}
        <h4 className="text-sm font-semibold">{title}</h4>
      </div>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
    </div>
  );
}
