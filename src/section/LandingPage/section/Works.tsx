{
  /* TODO: REMOVE WORKS SECTION IF NOT NEEDED */
}

// import Container from "@/pages/LandingPage/Container";
// import { ShineButton } from "@/shared/ui/effects/ShineButton";
// import { WORKS_CONTENT } from "@/utils/constants";
// import { Link } from "@tanstack/react-router";
// import { CheckCircle2, ChevronRight } from "lucide-react";

// const Works = () => {
//   const steps = [
//     { title: "Create account", desc: "Sign in with Google or magic link." },
//     { title: "Buy domain", desc: "Pick a registrar, we wire up DNS." },
//     { title: "Add mailboxes", desc: "Provision Gmail/Outlook users." },
//     { title: "Warm-up", desc: "Start safe sending with a daily cap." },
//     { title: "Connect tools", desc: "Export to Instantly/HubSpot/Leadbeam." },
//   ];

//   return (
//     <section
//       id="how"
//       className="bg-slate-50 py-16 dark:bg-slate-900/30 sm:py-20"
//     >
//       <Container>
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
//             {WORKS_CONTENT.TITLE}
//           </h2>
//           <p className="mt-3 text-slate-600 dark:text-slate-300">
//             {WORKS_CONTENT.DESCRIPTION}
//           </p>
//         </div>

//         <ol className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
//           {steps.map((step, i) => (
//             <Step key={step.title} n={i + 1} {...step} />
//           ))}
//         </ol>

//         <div className="mt-10 flex justify-center">
//           <Link to="/app/dashboard">
//             <ShineButton
//               className="btn-shine shadow-glow"
//               asLinkClassName="flex flex-1 items-center"
//             >
//               {WORKS_CONTENT.CTA_BUTTON}
//               <ChevronRight className="ml-1 h-4 w-4" />
//             </ShineButton>
//           </Link>
//         </div>
//       </Container>
//     </section>
//   );
// };

// type StepProps = { n: number; title: string; desc: string };

// function Step({ n, title, desc }: StepProps) {
//   return (
//     <li className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
//       <div className="flex items-center gap-3">
//         <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-900 text-xs font-semibold text-white dark:bg-white dark:text-slate-900">
//           {n}
//         </span>
//         <h4 className="text-sm font-semibold">{title}</h4>
//       </div>
//       <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
//       <div className="mt-3 flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
//         <CheckCircle2 className="h-4 w-4" /> Verified step
//       </div>
//     </li>
//   );
// }

// export default Works;
