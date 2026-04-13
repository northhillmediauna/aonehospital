import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Activity, Shield, Scissors, HeartPulse, Microscope } from 'lucide-react';
import { SERVICES } from '../../constants';

const ICON_MAP: Record<string, React.ElementType> = {
  kidney: Microscope,
  zap: Zap,
  activity: Activity,
  shield: Shield,
  stethoscope: HeartPulse,
  scissors: Scissors,
};

export default function ServicesPreview() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Our Services</p>
          <h2 className="section-title">Comprehensive Urological Treatments</h2>
          <span className="gold-line mx-auto" />
          <p className="section-subtitle max-w-2xl mx-auto">
            From kidney stone removal to advanced laparoscopic urology — we offer the full range of urological services with precision, care, and affordability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon] || Activity;
            return (
              <div key={service.id} className="bg-softgrey border border-gray-100 rounded-xl p-6 card-hover group">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-navy transition-colors duration-300">
                  <Icon size={22} className="text-navy group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-navy font-bold text-base mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.shortDesc}</p>
                <ul className="space-y-1.5">
                  {service.details.slice(0, 3).map((d) => (
                    <li key={d} className="text-xs text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/services" className="btn-primary">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
