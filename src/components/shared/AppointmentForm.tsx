import { useState, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const SERVICES_LIST = [
  'Kidney Stone Treatment',
  'Laser Stone Surgery (ESWL/URS)',
  'TURP – Prostate Surgery',
  'Pyeloplasty',
  'Laparoscopic Urology',
  'General Urology Consultation',
  'Other / Not Sure',
];

export default function AppointmentForm() {
  const [form, setForm] = useState<FormData>({
    name: '', phone: '', email: '', service: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="bg-primary-50 border border-primary-200 rounded-xl p-8 text-center animate-fade-in">
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-navy mb-2">Appointment Request Sent!</h3>
        <p className="text-gray-600 text-sm">
          Thank you, <strong>{form.name}</strong>. We will call you at <strong>{form.phone}</strong> to confirm your appointment shortly.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', message: '' }); }}
          className="mt-5 btn-secondary text-sm py-2"
        >
          Book Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="Your mobile number"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Optional – for appointment confirmation"
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Service Required *</label>
        <select
          name="service"
          required
          value={form.service}
          onChange={handleChange}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition bg-white"
        >
          <option value="">Select a service</option>
          {SERVICES_LIST.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message / Symptoms</label>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Briefly describe your symptoms or queries..."
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary justify-center py-3.5 text-sm"
      >
        {loading ? 'Sending...' : (
          <>
            <Send size={15} />
            Send Appointment Request
          </>
        )}
      </button>
      <p className="text-xs text-gray-400 text-center">
        We will call you back within a few hours to confirm your appointment. No online payment required.
      </p>
    </form>
  );
}
