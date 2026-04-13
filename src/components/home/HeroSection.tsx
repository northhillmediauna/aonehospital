import { Link } from 'react-router-dom';
import { Phone, Calendar, ShieldCheck, Award, Star } from 'lucide-react';
import { HOSPITAL_INFO } from '../../constants';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-900 via-navy to-primary-800 min-h-screen flex items-center overflow-hidden pt-20">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <ShieldCheck size={13} className="text-gold" />
            Nawanshahr's Most Trusted Urology Centre
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Expert Kidney &amp;
            <span className="text-gold"> Stone Care</span>
            <br />
            in Nawanshahr
          </h1>

          <p className="text-primary-200 text-lg leading-relaxed mb-8 max-w-lg">
            Advanced urology treatments — Kidney Stone Removal, Laser Surgery, TURP, Pyeloplasty — performed by Dr. Dig Vijay Singh with 15+ years of specialist experience. Affordable. Compassionate. Trusted.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link to="/contact" className="btn-primary text-base px-7 py-3.5">
              <Calendar size={17} />
              Book Appointment
            </Link>
            <a href={HOSPITAL_INFO.phoneHref} className="btn-outline text-base px-7 py-3.5">
              <Phone size={17} />
              {HOSPITAL_INFO.phone}
            </a>
          </div>

          <div className="flex flex-wrap gap-6">
            {[
              { icon: Award, label: '15+ Years', sub: 'Experience' },
              { icon: Star, label: '5000+', sub: 'Procedures' },
              { icon: ShieldCheck, label: '98%', sub: 'Success Rate' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={sub} className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Icon size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg leading-none">{label}</p>
                  <p className="text-primary-300 text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-in hidden lg:block">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/20">
            <img
              src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Dr. Dig Vijay Singh – Urologist at A-One Kidney and Stone Centre, Nawanshahr"
              className="w-full h-[520px] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-white font-bold text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                Dr. Dig Vijay Singh
              </p>
              <p className="text-primary-200 text-sm">MS, MCh (Urology) | Senior Urologist</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-gold text-white rounded-xl p-4 shadow-xl">
            <p className="text-2xl font-bold">15+</p>
            <p className="text-xs font-medium">Years of<br />Excellence</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
    </section>
  );
}
