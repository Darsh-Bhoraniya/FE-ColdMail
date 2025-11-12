import Container from "@/section/LandingPage/section/Container";
import FeatureCard from "@/section/LandingPage/section/FeatureCard";
import { Globe, Mail, Plug, Rocket, Settings } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Instant domain purchase",
    desc: "Buy with Cloudflare/GoDaddy/Namecheap. Auto-connect MX, SPF, DKIM, DMARC.",
  },
  {
    icon: Mail,
    title: "Mailboxes on Google/Outlook",
    desc: "Create inboxes via Workspace/Microsoft APIs. Assign to domains in one click.",
  },
  {
    icon: Settings,
    title: "Auto DNS & deliverability",
    desc: "Harden setup with correct TXT/MX + DMARC policies for better inboxing.",
  },
  {
    icon: Rocket,
    title: "Warm-up scheduler",
    desc: "IMAP/SMTP + OAuth flows. Safe ramp from 5/day with human-like sending.",
  },
  {
    icon: Plug,
    title: "One-click integrations",
    desc: "Instantly, HubSpot, Leadbeam, Lemlist. Pass OAuth or SMTP creds securely.",
  },
];

const Features = () => {
  return (
    <section id="solution" className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything for cold email ops
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            From domain purchase to inbox warm-up — ship reliably and keep your
            reputation healthy.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.slice(0, 3).map(({ icon: Icon, title, desc }) => (
              <FeatureCard
                key={title}
                icon={<Icon className="h-5 w-5" />}
                title={title}
                desc={desc}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:w-2/3">
              {features.slice(3).map(({ icon: Icon, title, desc }) => (
                <FeatureCard
                  key={title}
                  icon={<Icon className="h-5 w-5" />}
                  title={title}
                  desc={desc}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
