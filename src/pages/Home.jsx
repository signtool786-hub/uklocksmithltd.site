import Seo from '../components/Seo';
import Hero from '../components/Hero';
import Numbers from '../components/Numbers';
import AboutBlock from '../components/AboutBlock';
import Features from '../components/Features';
import ServicesBlock from '../components/ServicesBlock';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import Cta from '../components/Cta';
import Faqs from '../components/Faqs';

export default function Home() {
  return (
    <>
      <Seo
        title="UK Locksmith LTD | 24/7 Emergency London Locksmith"
        description="Locked out in London? UK Locksmith LTD offers 24/7 non-destructive emergency entry, BS3621 lock changes, and upfront fixed pricing. Call 07782 358 889."
        path=""
        includeSchema={true}
      />
      <Hero />
      <Numbers />
      <AboutBlock />
      <Features />
      <ServicesBlock />
      <WhyUs />
      <Testimonials />
      <Cta />
      <Faqs />
    </>
  );
}
