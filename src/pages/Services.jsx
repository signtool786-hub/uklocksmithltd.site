import Seo from '../components/Seo';
import PageHead from '../components/PageHead';
import ServicesBlock from '../components/ServicesBlock';
import HowItWorks from '../components/HowItWorks';
import Faqs from '../components/Faqs';
import Cta from '../components/Cta';

export default function Services() {
  return (
    <>
    {/* Seo  */}
      <Seo
        title="Locksmith Services London | UK Locksmith LTD"
        description="Emergency lockouts, lock changes, UPVC repairs, snapped key extraction, and commercial locks across all London boroughs. Call 07782 358 889 for fixed quotes."
        path="/services"
        includeSchema={true}
      />
      <PageHead
        title="Our Locksmith Services"
        description="From midnight emergency lockouts to insurance-approved lock replacements, our mobile London engineers carry the parts to fix your door on the spot."
      />
      <ServicesBlock full={true} />
      <HowItWorks />
      <Faqs />
      <Cta title="Locked out or need a lock fitted today?" />
    </>
  );
}
