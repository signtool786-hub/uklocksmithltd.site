import Seo from '../components/Seo';
import PageHead from '../components/PageHead';
import AboutBlock from '../components/AboutBlock';
import Numbers from '../components/Numbers';
import Features from '../components/Features';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import Cta from '../components/Cta';

export default function About() {
  return (
    <>
      <Seo
        title="About Us | UK Locksmith LTD London"
        description="Meet UK Locksmith LTD. Honest London tradespeople answering directly, quoting fixed prices upfront, and focusing on non-destructive entry across London."
        path="/about"
        includeSchema={true}
      />
      <PageHead
        title="About UK Locksmith LTD"
        description="A dedicated team of local London tradespeople providing upfront quotes, fast dispatch, and damage-free entry across all boroughs."
      />
      <AboutBlock />
      <Numbers />
      <Features />
      <WhyUs />
      <Testimonials />
      <Cta title="Speak directly to a local London locksmith" />
    </>
  );
}
