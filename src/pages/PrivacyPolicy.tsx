import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <main className="pt-20 min-h-screen bg-softgrey">
      <section className="bg-gradient-to-br from-navy to-primary-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-primary-200 text-base">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-10">
          <div className="prose prose-sm max-w-none text-gray-600 space-y-8">
            <div>
              <h2 className="text-navy font-bold text-xl mb-3">1. Introduction</h2>
              <p className="leading-relaxed">
                A-One Kidney &amp; Stone Centre ("we", "our", "us") respects your privacy and is committed to protecting any personal information you provide when using our website or contacting us for medical services. This Privacy Policy explains what information we collect, how we use it, and how we safeguard it.
              </p>
            </div>
            <div>
              <h2 className="text-navy font-bold text-xl mb-3">2. Information We Collect</h2>
              <p className="leading-relaxed mb-3">We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Your name, phone number, and email address (when you submit the appointment form)</li>
                <li>The nature of your medical concern or the service you are seeking</li>
                <li>General location information (city/district) for appointment scheduling</li>
                <li>Website usage data (pages viewed, time spent) through anonymous analytics</li>
              </ul>
            </div>
            <div>
              <h2 className="text-navy font-bold text-xl mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>To contact you to confirm and schedule your appointment</li>
                <li>To provide information about our medical services</li>
                <li>To improve our website and services based on anonymous usage data</li>
                <li>To respond to your queries or feedback</li>
              </ul>
            </div>
            <div>
              <h2 className="text-navy font-bold text-xl mb-3">4. Sharing of Information</h2>
              <p className="leading-relaxed">
                We do not sell, trade, or transfer your personal information to third parties. Your data is used solely for the purposes mentioned above within A-One Kidney &amp; Stone Centre. We may share information only when required by law or to protect the rights and safety of our patients.
              </p>
            </div>
            <div>
              <h2 className="text-navy font-bold text-xl mb-3">5. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>
            <div>
              <h2 className="text-navy font-bold text-xl mb-3">6. Cookies</h2>
              <p className="leading-relaxed">
                Our website may use cookies to improve user experience. You can choose to disable cookies in your browser settings. Disabling cookies may affect certain functionalities of the website.
              </p>
            </div>
            <div>
              <h2 className="text-navy font-bold text-xl mb-3">7. Your Rights</h2>
              <p className="leading-relaxed">
                You have the right to request access to, correction of, or deletion of any personal information we hold about you. To exercise these rights, please contact us via phone or email.
              </p>
            </div>
            <div>
              <h2 className="text-navy font-bold text-xl mb-3">8. Contact Us</h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
                <br /><strong>A-One Kidney &amp; Stone Centre</strong>
                <br />Chandigarh Rd, In Front of ITI, Nawanshahr, Punjab 144514
                <br />Phone: 098766 16318
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100">
            <Link to="/" className="btn-secondary text-sm py-2">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
