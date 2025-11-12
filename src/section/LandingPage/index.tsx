import Features from "@/section/LandingPage/section/Features";
import Hero from "@/section/LandingPage/section/Hero";
import LandingFooter from "@/section/LandingPage/section/LandingFooter";
import LogoMarquee from "@/section/LandingPage/section/LogoMarqee";
import NavBar from "@/section/LandingPage/section/NavBar";
import Aurora from "@/shared/ui/effects/Aurora";
import { GridPattern } from "@/shared/ui/effects/GridPattern";
import WhyChoose from "@/section/LandingPage/section/WhyChoose";
import FAQ from "@/section/LandingPage/section/FAQ";
import FinalCTA from "@/section/LandingPage/section/FinalCTA";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
      {/* Background FX */}
      <GridPattern />
      <Aurora />

      {/* NAVIGATION BAR */}
      <NavBar />

      {/* HERO */}
      <Hero />

      {/* LOGO MARQUEE */}
      <LogoMarquee />

      {/* FEATURES */}
      <Features />

      <WhyChoose />

      {/* HOW IT WORKS */}
      {/* TODO: REMOVE WORKS SECTION IF NOT NEEDED */}
      {/* <Works /> */}
      <FAQ />
      <FinalCTA />

      {/* FOOTER */}
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
