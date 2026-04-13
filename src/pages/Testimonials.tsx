import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import CTABanner from '../components/home/CTABanner';

export default function Testimonials() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-navy to-primary-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Patient Reviews</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Patients Say
          </h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            Real experiences from real patients. Hear what thousands of people from across Punjab have to say about their care at A-One Hospital.
          </p>
        </div>
      </section>

      <section className="bg-softgrey py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm card-hover flex flex-col">
                <Quote size={28} className="text-gold mb-4 opacity-50" />
                <p className="text-gray-600 text-sm leading-relaxed italic flex-1 mb-5">"{t.text}"</p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <span className="text-navy font-bold text-sm">{t.name[0]}</span>
                    </div>
                    <div>
                      <p className="text-navy font-semibold text-sm">{t.name}</p>
                      <p className="text-gray-400 text-xs">{t.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={13} className="text-gold fill-gold" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm text-center max-w-3xl mx-auto">
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={24} className="text-gold fill-gold" />
              ))}
            </div>
            <p className="text-3xl font-bold text-navy mb-1">4.9 / 5</p>
            <p className="text-gray-500 text-sm mb-6">Based on patient feedback across all treatments</p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { label: 'Doctor Expertise', pct: 98 },
                { label: 'Staff Behaviour', pct: 97 },
                { label: 'Value for Money', pct: 96 },
              ].map((r) => (
                <div key={r.label}>
                  <p className="text-xs text-gray-500 mb-2">{r.label}</p>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gold rounded-full"
                      style={{ width: `${r.pct}%` }}
                    />
                  </div>
                  <p className="text-right text-xs text-gray-400 mt-1">{r.pct}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
