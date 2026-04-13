import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { HOSPITAL_INFO } from '../../constants';
import AppointmentForm from '../shared/AppointmentForm';

export default function ContactSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Get In Touch</p>
          <h2 className="section-title">Book Your Appointment</h2>
          <span className="gold-line mx-auto" />
          <p className="section-subtitle max-w-xl mx-auto">
            Fill out the form below or call us directly. We'll confirm your appointment promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="bg-softgrey rounded-2xl p-8 shadow-sm">
              <AppointmentForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-navy rounded-2xl p-7 text-white">
              <h3 className="font-bold text-lg mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
                Contact Information
              </h3>
              <ul className="space-y-5">
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-primary-300 text-xs font-medium uppercase tracking-wide mb-0.5">Address</p>
                    <p className="text-white text-sm leading-relaxed">{HOSPITAL_INFO.address}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-primary-300 text-xs font-medium uppercase tracking-wide mb-0.5">Phone</p>
                    <a href={HOSPITAL_INFO.phoneHref} className="text-white text-sm hover:text-gold transition-colors">
                      {HOSPITAL_INFO.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <MessageCircle size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-primary-300 text-xs font-medium uppercase tracking-wide mb-0.5">WhatsApp</p>
                    <a href={HOSPITAL_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-gold transition-colors">
                      Chat on WhatsApp
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-primary-300 text-xs font-medium uppercase tracking-wide mb-0.5">OPD Hours</p>
                    <p className="text-white text-sm leading-relaxed">{HOSPITAL_INFO.hours}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm h-56">
              <iframe
                title="A-One Kidney and Stone Centre Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.764509869928!2d76.11723!3d31.1224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391affefffff%3A0x0!2sNawanshahr%2C+Punjab!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
