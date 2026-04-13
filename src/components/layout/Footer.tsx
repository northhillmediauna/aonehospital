import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, MessageCircle } from 'lucide-react';
import { HOSPITAL_INFO } from '../../constants';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
              <span className="text-navy font-bold text-sm">A1</span>
            </div>
            <div>
              <p className="font-bold text-base leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                A-One Kidney &amp; Stone Centre
              </p>
              <p className="text-primary-300 text-xs">Nawanshahr, Punjab</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Trusted urology and kidney stone care in Nawanshahr, Punjab. Led by Dr. Dig Vijay Singh with 15+ years of specialist experience.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={HOSPITAL_INFO.phoneHref}
              className="w-9 h-9 bg-primary-700 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
              aria-label="Call"
            >
              <Phone size={15} />
            </a>
            <a
              href={HOSPITAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-primary-700 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle size={15} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              ['Home', '/'],
              ['About Us', '/about'],
              ['Our Services', '/services'],
              ['Doctor Profile', '/doctor'],
              ['Testimonials', '/testimonials'],
              ['Contact Us', '/contact'],
              ['Privacy Policy', '/privacy-policy'],
              ['Terms & Conditions', '/terms'],
            ].map(([label, path]) => (
              <li key={path}>
                <Link to={path} className="hover:text-gold transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              'Kidney Stone Treatment',
              'Laser Stone Surgery',
              'ESWL Lithotripsy',
              'TURP – Prostate Surgery',
              'Pyeloplasty',
              'Laparoscopic Urology',
              'General Urology',
              'Urinary Tract Infection',
            ].map((s) => (
              <li key={s} className="hover:text-gold transition-colors cursor-pointer">
                <Link to="/services">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-gold mb-4">Contact Info</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex gap-3">
              <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
              <span>{HOSPITAL_INFO.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="text-gold shrink-0" />
              <a href={HOSPITAL_INFO.phoneHref} className="hover:text-gold transition-colors">
                {HOSPITAL_INFO.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="text-gold shrink-0" />
              <a href={`mailto:${HOSPITAL_INFO.email}`} className="hover:text-gold transition-colors">
                {HOSPITAL_INFO.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock size={16} className="text-gold shrink-0 mt-0.5" />
              <span className="leading-relaxed">{HOSPITAL_INFO.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} A-One Kidney &amp; Stone Centre, Nawanshahr. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
