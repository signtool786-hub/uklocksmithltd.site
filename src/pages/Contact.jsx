import Seo from '../components/Seo';
import PageHead from '../components/PageHead';
import ContactBlock from '../components/ContactBlock';
import Cta from '../components/Cta';

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us | UK Locksmith LTD London"
        description="Get in touch with UK Locksmith LTD. 24/7 emergency dispatch across London. Call 07782 358 889 directly for immediate help and honest upfront pricing."
        path="/contact"
        includeSchema={true}
      />
      <PageHead
        title="Contact UK Locksmith LTD"
        description="Available 24 hours a day, 7 days a week. Call our direct dispatch line for fast response across all London postcodes, or send a message for scheduled works."
      />
      <ContactBlock />
      <Cta title="Emergency lock problem? Speak directly to an engineer" />
    </>
  );
}
