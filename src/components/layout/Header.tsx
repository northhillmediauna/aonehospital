import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { HOSPITAL_INFO } from '../../constants';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Doctor', path: '/doctor' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center shadow">
              <span className="text-white font-bold text-sm leading-none">A1</span>
            </div>
            <div>
              <p className="text-navy font-bold text-base leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                A-One Kidney &amp; Stone Centre
              </p>
              <p className="text-gray-500 text-xs leading-tight">Nawanshahr, Punjab</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-gold border-b-2 border-gold'
                    : 'text-gray-700 hover:text-navy hover:bg-primary-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={HOSPITAL_INFO.phoneHref}
              className="flex items-center gap-2 text-navy font-semibold text-sm hover:text-gold transition-colors"
            >
              <Phone size={16} />
              {HOSPITAL_INFO.phone}
            </a>
            <Link to="/contact" className="btn-primary text-sm py-2 px-5">
              <Calendar size={15} />
              Book Appointment
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-3 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === link.path
                      ? 'bg-primary-50 text-navy font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href={HOSPITAL_INFO.phoneHref}
                  className="btn-secondary justify-center text-sm py-2"
                >
                  <Phone size={15} />
                  Call Now
                </a>
                <Link to="/contact" className="btn-primary justify-center text-sm py-2">
                  <Calendar size={15} />
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden grid grid-cols-2 shadow-2xl">
        <a
          href={HOSPITAL_INFO.phoneHref}
          className="flex items-center justify-center gap-2 bg-navy text-white py-4 text-sm font-semibold"
        >
          <Phone size={16} />
          Call Now
        </a>
        <Link
          to="/contact"
          className="flex items-center justify-center gap-2 bg-gold text-white py-4 text-sm font-semibold"
        >
          <Calendar size={16} />
          Book Appointment
        </Link>
      </div>
    </>
  );
}
