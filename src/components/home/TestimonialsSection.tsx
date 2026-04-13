import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../../constants';

export default function TestimonialsSection() {
  const preview = TESTIMONIALS.slice(0, 3);

  return (
    <section className="bg-primary-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Patient Stories</p>
          <h2 className="section-title text-white">What Our Patients Say</h2>
          <span className="gold-line mx-auto" />
          <p className="text-primary-300 text-base max-w-xl mx-auto">
            Real stories from patients who chose A-One Kidney &amp; Stone Centre for their care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {preview.map((t) => (
            <div key={t.name} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 card-hover">
              <Quote size={28} className="text-gold mb-4 opacity-60" />
              <p className="text-primary-100 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-primary-400 text-xs">{t.location}</p>
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

        <div className="text-center">
          <Link to="/testimonials" className="btn-outline">
            Read More Stories <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
