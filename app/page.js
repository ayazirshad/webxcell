import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";
import Inventory from "./components/Inventory/Inventory";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import SpecialOffer from "./components/SpecialOffer/SpecialOffer";
import ExpertTeam from "./components/ExpertTeam/ExpertTeam";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Inventory />
      <CaseStudies />
      <SpecialOffer />
      <ExpertTeam />
    </>
  );
}
