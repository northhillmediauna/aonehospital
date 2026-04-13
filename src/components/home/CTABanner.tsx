import { Link } from 'react-router-dom';
import { Phone, Calendar, MessageCircle } from 'lucide-react';
import { HOSPITAL_INFO } from '../../constants';

export default function CTABanner() {
  return (
    <section className="relative bg-gradient-to-r from-gold to-amber-500 py-16 overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Don't Delay Your Kidney Stone Treatment
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Early treatment prevents complications. Book a consultation with Dr. Dig Vijay Singh today — call, WhatsApp, or fill out the appointment form.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="bg-white text-gold font-semibold px-7 py-3.5 rounded-md hover:bg-gray-100 transition-all shadow-md inline-flex items-center gap-2"
          >
            <Calendar size={17} />
            Book Appointment
          </Link>
          <a
            href={HOSPITAL_INFO.phoneHref}
            className="border-2 border-white text-white font-semibold px-7 py-3.5 rounded-md hover:bg-white hover:text-gold transition-all inline-flex items-center gap-2"
          >
            <Phone size={17} />
            Call Now
          </a>
          <a
            href={HOSPITAL_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white font-semibold px-7 py-3.5 rounded-md hover:bg-white hover:text-gold transition-all inline-flex items-center gap-2"
          >
            <MessageCircle size={17} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
