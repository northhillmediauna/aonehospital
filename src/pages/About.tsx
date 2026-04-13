import { CheckCircle, Target, Eye, Heart } from 'lucide-react';
import CTABanner from '../components/home/CTABanner';

const MILESTONES = [
  { year: '2008', label: 'Founded A-One Kidney & Stone Centre in Nawanshahr' },
  { year: '2010', label: 'Introduced first laser lithotripsy service in the region' },
  { year: '2013', label: 'Crossed 1000 successful kidney stone procedures' },
  { year: '2016', label: 'Launched advanced laparoscopic urology services' },
  { year: '2019', label: 'Expanded to modern endoscopy and TURP facility' },
  { year: '2024', label: '5000+ procedures and growing – trusted across Punjab' },
];

export default function About() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-navy to-primary-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About A-One Kidney &amp; Stone Centre
          </h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            Over a decade of trusted urological care in Nawanshahr, Punjab — combining expertise, empathy, and excellence.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Our Story</p>
            <h2 className="section-title">Dedicated to Kidney &amp; Urological Health</h2>
            <span className="gold-line" />
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                A-One Kidney &amp; Stone Centre was established with a single vision: to bring world-class urology and kidney stone treatment to the people of Nawanshahr and the surrounding districts of Punjab — without the need to travel to a distant city.
              </p>
              <p>
                Located on Chandigarh Road, in front of ITI, Nawanshahr, our hospital has grown to become the most trusted name in kidney stone management and urological surgery in the region. Our facility is equipped with advanced laser, endoscopy, and laparoscopic technology.
              </p>
              <p>
                Under the expert leadership of Dr. Dig Vijay Singh (MS, MCh – Urology), we have performed thousands of successful kidney stone removals, prostate surgeries, and urological procedures, changing the lives of patients from across Punjab.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-softgrey rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold text-navy mb-1">15+</p>
              <p className="text-gray-500 text-sm">Years of Experience</p>
            </div>
            <div className="bg-softgrey rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold text-navy mb-1">5000+</p>
              <p className="text-gray-500 text-sm">Procedures Performed</p>
            </div>
            <div className="bg-softgrey rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold text-navy mb-1">98%</p>
              <p className="text-gray-500 text-sm">Patient Satisfaction</p>
            </div>
            <div className="bg-softgrey rounded-2xl p-6 text-center">
              <p className="text-4xl font-bold text-navy mb-1">6+</p>
              <p className="text-gray-500 text-sm">Specialized Treatments</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-softgrey py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, title: 'Our Mission', color: 'bg-blue-50 text-blue-700', text: 'To provide affordable, advanced, and compassionate kidney and urological care to every patient who walks through our doors, ensuring they leave healthier and with confidence.' },
            { icon: Eye, title: 'Our Vision', color: 'bg-teal-50 text-teal-700', text: 'To be the leading urology and kidney stone centre in Punjab, known for clinical excellence, patient-first care, and the adoption of the latest minimally invasive technologies.' },
            { icon: Heart, title: 'Our Values', color: 'bg-amber-50 text-amber-700', text: 'Integrity in every diagnosis. Transparency in every cost. Compassion in every consultation. Excellence in every procedure. These are the pillars of A-One care.' },
          ].map(({ icon: Icon, title, color, text }) => (
            <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-5`}>
                <Icon size={22} />
              </div>
              <h3 className="text-navy font-bold text-xl mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Our Journey</p>
            <h2 className="section-title">Hospital Milestones</h2>
            <span className="gold-line mx-auto" />
          </div>
          <div className="relative border-l-2 border-primary-200 pl-8 space-y-8">
            {MILESTONES.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-[41px] w-8 h-8 bg-navy rounded-full flex items-center justify-center border-2 border-white shadow">
                  <span className="text-white text-xs font-bold">{m.year.slice(2)}</span>
                </div>
                <span className="text-gold font-bold text-sm">{m.year}</span>
                <p className="text-gray-700 text-sm mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-softgrey py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="section-title text-center mb-2">Our Facility &amp; Equipment</h2>
          <span className="gold-line mx-auto mb-8" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Holmium Laser Lithotripsy System',
              'ESWL – Shock Wave Lithotripsy',
              'Digital X-Ray &amp; Ultrasound',
              'Flexible &amp; Rigid Ureteroscope',
              'TURP &amp; Endoscopy Suite',
              'Modern OT with Sterile Environment',
              'Recovery Rooms with Nursing Care',
              'Pharmacy &amp; Diagnostic Lab',
              'Wheelchair Accessible Premises',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-gray-100 text-sm text-gray-700">
                <CheckCircle size={14} className="text-gold shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
