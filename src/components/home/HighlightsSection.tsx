import { Activity, Microscope, IndianRupee, MapPin } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: Microscope,
    title: 'Kidney & Stone Specialist',
    desc: 'Expert diagnosis and treatment of all kidney stone types using latest endoscopic and laser technology.',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: Activity,
    title: 'Full Urology Expertise',
    desc: 'Complete urological care — prostate, bladder, kidney, ureter — under one trusted roof.',
    color: 'bg-teal-50 text-teal-700',
  },
  {
    icon: IndianRupee,
    title: 'Affordable Treatment',
    desc: 'World-class urological care at costs that are transparent, fair, and accessible to every family.',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    icon: MapPin,
    title: 'Trusted Local Care',
    desc: 'Serving Nawanshahr, Hoshiarpur, Ropar and Punjab since years. Thousands of satisfied patients.',
    color: 'bg-green-50 text-green-700',
  },
];

export default function HighlightsSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="bg-softgrey rounded-xl p-6 border border-gray-100 card-hover">
              <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4`}>
                <Icon size={22} />
              </div>
              <h3 className="font-bold text-navy text-base mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
