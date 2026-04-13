import { Award, Cpu, Zap, Heart, MapPin, Users } from 'lucide-react';
import { WHY_CHOOSE } from '../../constants';

const ICON_MAP: Record<string, React.ElementType> = {
  award: Award,
  cpu: Cpu,
  zap: Zap,
  heart: Heart,
  'map-pin': MapPin,
  users: Users,
};

export default function WhyChooseUs() {
  return (
    <section className="bg-softgrey py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Why Us</p>
          <h2 className="section-title">Why Patients Choose A-One</h2>
          <span className="gold-line mx-auto" />
          <p className="section-subtitle max-w-2xl mx-auto">
            We combine medical excellence, cutting-edge technology, and genuine compassion to deliver results that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE.map((item, i) => {
            const Icon = ICON_MAP[item.icon] || Award;
            return (
              <div key={item.title} className="bg-white rounded-xl p-7 border border-gray-100 card-hover flex gap-5">
                <div className="w-12 h-12 bg-primary-900 rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-navy font-bold text-base mb-1.5">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
