import { Phone, MapPin, Clock, Mail, MessageCircle } from 'lucide-react';
import { HOSPITAL_INFO } from '../constants';
import AppointmentForm from '../components/shared/AppointmentForm';

export default function Contact() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-br from-navy to-primary-700 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Contact Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your Appointment
          </h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            Reach out to us by phone, WhatsApp, or the appointment form. Our team will get back to you promptly.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Request Appointment</p>
            <h2 className="section-title">Fill the Form Below</h2>
            <span className="gold-line" />
            <p className="section-subtitle mb-7">
              No online payment required. We will call you back to confirm your appointment slot.
            </p>
            <div className="bg-softgrey rounded-2xl p-8 border border-gray-100">
              <AppointmentForm />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Or Contact Directly</p>
              <h2 className="section-title">Get In Touch</h2>
              <span className="gold-line" />
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  label: 'Phone',
                  value: HOSPITAL_INFO.phone,
                  href: HOSPITAL_INFO.phoneHref,
                  sub: 'Mon–Sat 9AM–7PM | Sun 10AM–2PM',
                },
                {
                  icon: MessageCircle,
                  label: 'WhatsApp',
                  value: 'Send a WhatsApp Message',
                  href: HOSPITAL_INFO.whatsapp,
                  sub: 'Usually responds within a few hours',
                  external: true,
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: HOSPITAL_INFO.email,
                  href: `mailto:${HOSPITAL_INFO.email}`,
                  sub: 'For detailed queries and reports',
                },
                {
                  icon: MapPin,
                  label: 'Address',
                  value: HOSPITAL_INFO.address,
                  href: 'https://maps.google.com/?q=Nawanshahr+Punjab',
                  sub: 'Chandigarh Rd, In Front of ITI',
                  external: true,
                },
                {
                  icon: Clock,
                  label: 'OPD Timings',
                  value: 'Mon – Sat: 9:00 AM – 7:00 PM',
                  href: '',
                  sub: 'Sunday: 10:00 AM – 2:00 PM',
                },
              ].map(({ icon: Icon, label, value, href, sub, external }) => (
                <div key={label} className="flex gap-4 bg-softgrey rounded-xl p-5 border border-gray-100">
                  <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={17} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        className="text-navy font-medium text-sm hover:text-gold transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-navy font-medium text-sm">{value}</p>
                    )}
                    <p className="text-gray-400 text-xs mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm h-64 border border-gray-100">
              <iframe
                title="A-One Hospital Location Nawanshahr"
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
      </section>
    </main>
  );
}
