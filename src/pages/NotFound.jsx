import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import PageHead from '../components/PageHead';
import CallButton from '../components/CallButton';
import Cta from '../components/Cta';

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | UK Locksmith LTD"
        description="The page you requested could not be found. UK Locksmith LTD provides 24/7 emergency locksmith services across London. Call 07782 358 889."
        path="/404"
        includeSchema={false}
      />
      <PageHead
        title="404 — Page Not Found"
        subtitle="The page you are looking for does not exist or may have moved."
      />
      <section className="py-16 sm:py-24 bg-mist text-center">
        <div className="max-w-xl mx-auto px-4">
          <p className="text-lg text-text/80 mb-8 leading-relaxed">
            If you need an emergency locksmith right now anywhere in London,
            our direct telephone dispatch line is open 24 hours a day.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CallButton label="Call" className="py-3 px-6 text-base shadow-md" />
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-forest text-mist font-bold text-sm hover:bg-forest2 transition-colors"
            >
              <span>Back to Home</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
      <Cta title="Locked out or need urgent assistance?" />
    </>
  );
}

