import { Link } from 'react-router-dom';
import { Zap, Activity, Shield, Scissors, HeartPulse, Microscope, CheckCircle, Calendar } from 'lucide-react';
import { SERVICES } from '../constants';
import CTABanner from '../components/home/CTABanner';

const ICON_MAP: Record<string, React.ElementType> = {
  kidney: Microscope,
  zap: Zap,
  activity: Activity,
  shield: Shield,
  stethoscope: HeartPulse,
  scissors: Scissors,
};

export default function Services() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-navy to-primary-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Comprehensive Urology Treatments
          </h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            Advanced urological care from kidney stone removal to laparoscopic surgery — all under one roof in Nawanshahr, Punjab.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-16">
            {SERVICES.map((service, i) => {
              const Icon = ICON_MAP[service.icon] || Activity;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-10 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <div className="inline-flex items-center gap-3 bg-primary-50 rounded-xl px-4 py-2 mb-5">
                      <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                        <Icon size={18} className="text-gold" />
                      </div>
                      <span className="text-navy font-semibold text-sm">Urology Specialty</span>
                    </div>
                    <h2 className="section-title">{service.title}</h2>
                    <span className="gold-line" />
                    <p className="section-subtitle mb-6">{service.shortDesc}</p>
                    <h4 className="text-navy font-semibold text-sm uppercase tracking-wide mb-3">What We Offer:</h4>
                    <ul className="space-y-3 mb-7">
                      {service.details.map((d) => (
                        <li key={d} className="flex items-start gap-3 text-sm text-gray-600">
                          <CheckCircle size={16} className="text-gold shrink-0 mt-0.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn-primary">
                      <Calendar size={15} />
                      Book Consultation
                    </Link>
                  </div>
                  <div className={`bg-softgrey rounded-2xl p-8 border border-gray-100 ${isEven ? '' : 'lg:order-1'}`}>
                    <div className="w-16 h-16 bg-primary-900 rounded-2xl flex items-center justify-center mb-6">
                      <Icon size={32} className="text-gold" />
                    </div>
                    <h3 className="text-navy font-bold text-xl mb-3">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{service.shortDesc}</p>
                    <div className="bg-navy/5 rounded-xl p-5">
                      <p className="text-navy font-semibold text-xs uppercase tracking-wide mb-3">Key Benefits</p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full" />Performed by specialist urologist</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full" />Minimally invasive techniques</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full" />Affordable transparent pricing</li>
                        <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gold rounded-full" />Quick recovery, same-day discharge</li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
