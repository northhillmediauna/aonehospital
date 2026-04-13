import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const POINTS = [
  'State-of-the-art endoscopy and laser equipment',
  'Personalized treatment plans for every patient',
  'Transparent pricing – no hidden charges',
  'Hygienic, comfortable, and modern facilities',
  'Multilingual staff – Hindi, Punjabi, English',
];

export default function AboutPreview() {
  return (
    <section className="bg-softgrey py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="A-One Kidney and Stone Centre hospital facility in Nawanshahr Punjab"
              className="w-full h-80 lg:h-96 object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-white border border-gray-100 rounded-xl shadow-lg p-5 max-w-[200px]">
            <p className="text-4xl font-bold text-navy">15+</p>
            <p className="text-sm text-gray-500 mt-1">Years serving patients across Punjab</p>
          </div>
        </div>

        <div>
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">About Us</p>
          <h2 className="section-title">
            Nawanshahr's Premier Kidney &amp; Urology Centre
          </h2>
          <span className="gold-line" />
          <p className="section-subtitle mb-6">
            A-One Kidney &amp; Stone Centre is a dedicated urology hospital located on Chandigarh Road, Nawanshahr. Under the expert guidance of Dr. Dig Vijay Singh, we offer comprehensive kidney stone treatment, minimally invasive surgeries, and full-spectrum urological care — all under one roof.
          </p>
          <ul className="space-y-3 mb-8">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-gray-600">
                <CheckCircle size={16} className="text-gold shrink-0 mt-0.5" />
                {point}
              </li>
            ))}
          </ul>
          <Link to="/about" className="btn-secondary">
            Learn More About Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
