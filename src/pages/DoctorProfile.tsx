import { Link } from 'react-router-dom';
import { CheckCircle, GraduationCap, Award, Star, Calendar, Phone } from 'lucide-react';
import { DOCTOR, HOSPITAL_INFO } from '../constants';
import CTABanner from '../components/home/CTABanner';

export default function DoctorProfile() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-navy to-primary-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Our Specialist</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{DOCTOR.name}</h1>
          <p className="text-primary-200 text-lg">{DOCTOR.title} &mdash; {DOCTOR.specialization}</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-4 ring-primary-100 mb-6">
              <img
                src={DOCTOR.image}
                alt={`${DOCTOR.name} – Senior Urologist at A-One Hospital Nawanshahr Punjab`}
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-white font-bold text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {DOCTOR.name}
                </p>
                <p className="text-primary-200 text-sm">{DOCTOR.title}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '5000+', label: 'Procedures' },
                { value: '98%', label: 'Success Rate' },
              ].map((stat) => (
                <div key={stat.label} className="bg-softgrey rounded-xl p-4 text-center border border-gray-100">
                  <p className="text-2xl font-bold text-navy">{stat.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Biography</p>
            <h2 className="section-title">{DOCTOR.name}</h2>
            <span className="gold-line" />
            <p className="text-gray-600 text-sm leading-relaxed mb-8">{DOCTOR.description}</p>

            <div className="grid sm:grid-cols-2 gap-7 mb-8">
              <div>
                <h3 className="text-navy font-bold text-sm uppercase tracking-wide flex items-center gap-2 mb-4">
                  <GraduationCap size={15} className="text-gold" /> Qualifications
                </h3>
                <ul className="space-y-3">
                  {DOCTOR.qualifications.map((q) => (
                    <li key={q} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle size={14} className="text-gold shrink-0 mt-0.5" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-navy font-bold text-sm uppercase tracking-wide flex items-center gap-2 mb-4">
                  <Award size={15} className="text-gold" /> Achievements
                </h3>
                <ul className="space-y-3">
                  {DOCTOR.achievements.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-sm text-gray-600">
                      <Star size={14} className="text-gold shrink-0 mt-0.5" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-softgrey rounded-2xl p-6 border border-gray-100 mb-8">
              <h3 className="text-navy font-bold text-base mb-4">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Kidney Stone Treatment', 'Laser Lithotripsy', 'URS & PCNL',
                  'TURP Surgery', 'Pyeloplasty', 'Laparoscopic Urology',
                  'Bladder Disorders', 'Prostate Conditions', 'Male Urology',
                  'Urinary Tract Infection', 'Adrenal Surgery', 'Urological Cancers',
                ].map((tag) => (
                  <span key={tag} className="bg-primary-100 text-navy text-xs font-medium px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                <Calendar size={16} />
                Book Appointment
              </Link>
              <a href={HOSPITAL_INFO.phoneHref} className="btn-secondary">
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
