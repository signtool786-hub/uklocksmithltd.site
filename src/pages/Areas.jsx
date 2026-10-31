import Seo from '../components/Seo';
import PageHead from '../components/PageHead';
import { AREAS_LIST, PHONE, HOURS } from '../config';
import CallButton from '../components/CallButton';
import Cta from '../components/Cta';

export default function Areas() {
  return (
    <>
      <Seo
        title="London Service Areas | UK Locksmith LTD"
        description="24/7 mobile locksmith coverage across Central, North, East, South, and West London. Fast dispatch to your door with upfront fixed quotes. Call 07782 358 889."
        path="/areas"
        includeSchema={true}
      />
      <PageHead
        title="London Areas We Cover"
        description="Mobile locksmith units stationed throughout Greater London for rapid response. 24 hours a day, 365 days a year."
      />

      <section aria-label="Coverage areas" className="py-16 sm:py-24 bg-mist">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-forest tracking-tight">
              Greater London Locksmith Coverage
            </h2>
            <p className="text-text/80 text-base sm:text-lg mt-3 leading-relaxed">
              We dispatch mobile locksmiths across all boroughs. Our vans are fully stocked with British Standard locks, euro cylinders, and specialized non-destructive entry tools.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AREAS_LIST.map((area) => (
              <div
                key={area.name}
                className="bg-white p-6 sm:p-7 rounded-[20px] shadow-sm border border-sage/80 flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold font-heading text-forest">
                      {area.name}
                    </h3>
                    <span className="text-[11px] font-bold text-coral uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-forest">
                      24/7
                    </span>
                  </div>
                  <p className="text-sm text-text/80 leading-relaxed">
                    Rapid mobile response for emergency lockouts, lock replacements, and broken keys in {area.name}.
                  </p>
                </div>
                <div className="pt-4 border-t border-sage/50 flex items-center justify-between">
                  <a
                    href={PHONE.tel}
                    className="text-xs font-bold text-forest hover:text-coral transition-colors flex items-center gap-1"
                  >
                    <span>Call for {area.name}</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-[20px] bg-sage border border-forest/10 flex flex-wrap items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="font-heading font-bold text-xl text-forest">
                Not sure if we cover your postcode?
              </h3>
              <p className="text-text/80 text-sm">
                If you are within the M25 or surrounding boroughs, we have an engineer nearby.
              </p>
            </div>
            <CallButton label="Call" className="py-3 px-6 text-sm" />
          </div>
        </div>
      </section>

      <Cta title="Need a locksmith in your London area?" />
    </>
  );
}
