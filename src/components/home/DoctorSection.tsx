import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, GraduationCap } from 'lucide-react';
import { DOCTOR } from '../../constants';

export default function DoctorSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Our Specialist</p>
          <h2 className="section-title">{DOCTOR.name}</h2>
          <span className="gold-line" />
          <p className="text-primary-700 font-semibold text-base mb-1">{DOCTOR.title}</p>
          <p className="text-gray-500 text-sm mb-5">{DOCTOR.specialization}</p>
          <p className="section-subtitle mb-7">{DOCTOR.description}</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-navy mb-3 flex items-center gap-2">
                <GraduationCap size={14} /> Qualifications
              </h4>
              <ul className="space-y-2">
                {DOCTOR.qualifications.map((q) => (
                  <li key={q} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle size={14} className="text-gold shrink-0 mt-0.5" />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-navy mb-3 flex items-center gap-2">
                <CheckCircle size={14} /> Achievements
              </h4>
              <ul className="space-y-2">
                {DOCTOR.achievements.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link to="/doctor" className="btn-secondary">
            Full Doctor Profile <ArrowRight size={16} />
          </Link>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl ring-4 ring-primary-100">
            <img
              src={DOCTOR.image}
              alt={`${DOCTOR.name} – Urologist at A-One Hospital Nawanshahr`}
              className="w-full h-[460px] object-cover object-top"
            />
          </div>
          <div className="absolute top-5 -left-5 bg-gold text-white rounded-xl p-4 shadow-lg text-center">
            <p className="text-2xl font-bold leading-none">15+</p>
            <p className="text-xs font-medium mt-1">Years<br />Experience</p>
          </div>
          <div className="absolute bottom-5 -right-5 bg-white border border-gray-100 rounded-xl p-4 shadow-lg">
            <p className="text-2xl font-bold text-navy leading-none">5000+</p>
            <p className="text-xs text-gray-500 mt-1">Successful<br />Procedures</p>
          </div>
        </div>
      </div>
    </section>
  );
}
