import { Link } from 'react-router-dom';

export default function TermsConditions() {
  return (
    <main className="pt-20 min-h-screen bg-softgrey">
      <section className="bg-gradient-to-br from-navy to-primary-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Terms &amp; Conditions</h1>
          <p className="text-primary-200 text-base">Last updated: January 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-10">
          <div className="text-gray-600 space-y-8 text-sm">
            <div>
              <h2 className="text-navy font-bold text-xl mb-3">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using the A-One Kidney &amp; Stone Centre website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this website.
              </p>
            </div>
            <div>
              <h2 className="text-navy font-bold text-xl mb-3">2. Medical Disclaimer</h2>
              <p className="leading-relaxed">
                The information provided on this website is for general informational purposes only and is not intended as medical advice. All medical decisions should be made in consultation with qualified healthcare professionals. A-One Kidney &amp; Stone Centre is not responsible for any actions taken based on information found on this website.
              </p>
            </div>
            <div>
              <h2 className="text-navy font-bold text-xl mb-3">3. Appointment Requests</h2>
              <p className="leading-relaxed">
                Submitting an appointment request form on this website does not guarantee a confirmed appointment. An appointment is confirmed only after our staff contacts you and verbally confirms a date and time. We do not collect any payment through this website.
              </p>
            </div>
            <div>
              <h2 className="text-navy font-bold text-xl mb-3">4. Accuracy of Information</h2>
              <p className="leading-relaxed">
                We strive to ensure that all information on this website is accurate and up to date. However, we make no warranties or representations as to the accuracy of the content. Service offerings, pricing, doctor availability, and contact details may change without notice.
              </p>
            </div>
            <div>
              <h2 className="text-navy font-bold text-xl mb-3">5. Intellectual Property</h2>
              <p className="leading-relaxed">
                All content on this website including text, graphics, logos, and images is the property of A-One Kidney &amp; Stone Centre and is protected under applicable intellectual property laws. You may not reproduce, distribute, or use any content without our prior written permission.
              </p>
            </div>
            <div>
              <h2 className="text-navy font-bold text-xl mb-3">6. Limitation of Liability</h2>
              <p className="leading-relaxed">
                A-One Kidney &amp; Stone Centre shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of or inability to use this website or from reliance on any information provided herein.
              </p>
            </div>
            <div>
              <h2 className="text-navy font-bold text-xl mb-3">7. Third-Party Links</h2>
              <p className="leading-relaxed">
                This website may contain links to third-party websites such as Google Maps and WhatsApp. We are not responsible for the content, privacy practices, or terms of these external sites.
              </p>
            </div>
            <div>
              <h2 className="text-navy font-bold text-xl mb-3">8. Governing Law</h2>
              <p className="leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes arising from the use of this website shall be subject to the jurisdiction of courts in Punjab, India.
              </p>
            </div>
            <div>
              <h2 className="text-navy font-bold text-xl mb-3">9. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated date. Your continued use of the website after any changes constitutes your acceptance of the new terms.
              </p>
            </div>
            <div>
              <h2 className="text-navy font-bold text-xl mb-3">10. Contact</h2>
              <p className="leading-relaxed">
                For any questions regarding these terms, please contact:
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
