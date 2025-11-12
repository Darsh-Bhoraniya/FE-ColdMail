import ApolloLogo from "@/assets/marquee/apollo.svg";
import HubspotLogo from "@/assets/marquee/hubspot.svg";
import InstantlyLogo from "@/assets/marquee/instantly.svg";
import LemlistLogo from "@/assets/marquee/lemlist.svg";
import LunaLogo from "@/assets/marquee/luna.svg";
import MasterInboxLogo from "@/assets/marquee/masterinbox.svg";
import OutreachLogo from "@/assets/marquee/outreach.svg";
import RangeflowLogo from "@/assets/marquee/rangeflow.svg";
import SaleshandyLogo from "@/assets/marquee/saleshandy.svg";
import SmartleadLogo from "@/assets/marquee/smartlead.svg";
import UbicoLogo from "@/assets/marquee/ubico.svg";
import Container from "@/section/LandingPage/section/Container";
import { Marquee } from "@/shared/ui/effects/Marquee";

const logos = [
  ApolloLogo,
  HubspotLogo,
  InstantlyLogo,
  LemlistLogo,
  LunaLogo,
  MasterInboxLogo,
  OutreachLogo,
  RangeflowLogo,
  SaleshandyLogo,
  SmartleadLogo,
  UbicoLogo,
];

const LogoMarquee = () => {
  return (
    <section className="border-y border-slate-100 py-6 backdrop-blur-sm bg-white">
      <Container className="bg-white">
        <Marquee
          items={logos.map((src, i) => (
            <img key={i} src={src} className="h-6 mx-4" alt={`Logo ${i + 1}`} />
          ))}
        />
      </Container>
    </section>
  );
};

export default LogoMarquee;
