export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-800 to-green-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-green-100">
            Effective Date: December 26, 2025
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        
        {/* Introduction Banner */}
        <div className="bg-gradient-to-br from-green-50 to-amber-50 p-8 rounded-2xl border-2 border-green-200 mb-12">
          <p className="text-gray-800 leading-relaxed text-lg">
            News Of The Tribe considers that confidentiality of personal data (or information) is of the utmost importance and undertakes to protect it in accordance with the laws and regulations in force on the protection of personal data.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            This Privacy Policy complies with relevant Australian privacy laws, including the <strong>Privacy Act 1988 (Cth)</strong> and the <strong>Australian Privacy Principles (APPs)</strong>. If you are located in Australia, you have rights under these laws to access, correct, or complain about the handling of your personal information.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Table of Contents</h2>
          <nav className="grid md:grid-cols-2 gap-3">
            <a href="#introduction" className="text-green-800 hover:text-green-900 hover:underline">1. Introduction</a>
            <a href="#information-collect" className="text-green-800 hover:text-green-900 hover:underline">2. Information We Collect</a>
            <a href="#how-use" className="text-green-800 hover:text-green-900 hover:underline">3. How We Use Your Information</a>
            <a href="#how-share" className="text-green-800 hover:text-green-900 hover:underline">4. How We Share Your Information</a>
            <a href="#data-retention" className="text-green-800 hover:text-green-900 hover:underline">5. Data Retention & Security</a>
            <a href="#security" className="text-green-800 hover:text-green-900 hover:underline">6. Security and Protection</a>
            <a href="#service-providers" className="text-green-800 hover:text-green-900 hover:underline">7. Service Providers</a>
            <a href="#your-rights" className="text-green-800 hover:text-green-900 hover:underline">8. Your Rights & Choices</a>
            <a href="#cookies" className="text-green-800 hover:text-green-900 hover:underline">9. Use of Cookies</a>
            <a href="#contact" className="text-green-800 hover:text-green-900 hover:underline">10. Contact Us</a>
          </nav>
        </div>

        {/* Sections */}
        <div className="space-y-12">

          {/* Section 1 */}
          <section id="introduction">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-800 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Introduction</h2>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-800">
              <p className="text-gray-700 leading-relaxed text-lg">
                Welcome to News Of The Tribe, ("we," "our," or "us"). This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our mobile application (the "App"). By using our App, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="information-collect">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-800 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-800">
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect different types of information to provide and improve our services, including:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-800 font-bold mt-1">•</span>
                  <span className="text-gray-700"><strong>Personal Information:</strong> When you register, we may collect your name, email address, birth date and other necessary details as per what you fill in.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-800 font-bold mt-1">•</span>
                  <span className="text-gray-700"><strong>User-Generated Content:</strong> Any images, text, or other content you upload to the App.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-800 font-bold mt-1">•</span>
                  <span className="text-gray-700"><strong>Usage Data:</strong> Device IDs.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section id="how-use">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-800 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h2 className="text-3xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-800">
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the collected information to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-800 font-bold mt-1">•</span>
                  <span className="text-gray-700">Provide, operate, and improve our App.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-800 font-bold mt-1">•</span>
                  <span className="text-gray-700">Personalize user experience.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-800 font-bold mt-1">•</span>
                  <span className="text-gray-700">Process and display shared images and text.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-800 font-bold mt-1">•</span>
                  <span className="text-gray-700">Print your personal newspaper.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-800 font-bold mt-1">•</span>
                  <span className="text-gray-700">Monitor and analyze usage trends.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-800 font-bold mt-1">•</span>
                  <span className="text-gray-700">Ensure compliance with our Terms and Conditions of Use and legal obligations.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section id="how-share">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-800 text-white rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <h2 className="text-3xl font-bold text-gray-900">How We Share Your Information</h2>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-800">
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                <p className="text-gray-800 font-semibold">
                  We do not sell your personal information.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                However, we may share it in the following circumstances:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-green-800 font-bold mt-1">•</span>
                  <div>
                    <strong className="text-gray-900">With Other Users (only) of the same Tribe:</strong>
                    <p className="text-gray-700">Your shared content may be visible to another member of your Tribe(s)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-800 font-bold mt-1">•</span>
                  <div>
                    <strong className="text-gray-900">Service Providers:</strong>
                    <p className="text-gray-700">We may work with third-party services to enhance functionality.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-800 font-bold mt-1">•</span>
                  <div>
                    <strong className="text-gray-900">Legal Requirements:</strong>
                    <p className="text-gray-700">If required by law or to protect our legal rights.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-800 font-bold mt-1">•</span>
                  <div>
                    <strong className="text-gray-900">Business Transfers:</strong>
                    <p className="text-gray-700">If we undergo a merger, sale, or acquisition, your information may be transferred.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section id="data-retention">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-800 text-white rounded-full flex items-center justify-center font-bold text-xl">
                5
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Data Retention & Security</h2>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-800 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                We retain your information as long as necessary to provide our services. We implement security measures to protect your data, but no system is entirely secure. Users should be cautious about the content they share.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Personal data associated with users will be kept for the duration of the subscription to the News Of The Tribe service and for as long as necessary for the performance of your contract with us.
              </p>
              <div className="bg-green-50 p-6 rounded-lg space-y-3">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Cancellation without account deletion:</h4>
                  <p className="text-gray-700">Personal data will be retained for 2 years and remain accessible through the News Of The Tribe space.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Cancellation with account deletion:</h4>
                  <p className="text-gray-700">Personal data will be deleted from our database immediately.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="security">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-800 text-white rounded-full flex items-center justify-center font-bold text-xl">
                6
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Security and Protection of Personal Data</h2>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-800 space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Hosting & Infrastructure</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our services are hosted on <strong>Amazon Web Services (AWS)</strong> in the Asia Pacific (Sydney, Australia) data centre (ap-southeast-2 region). This ensures that all data remains securely stored within Australia.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">Encryption & Security</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All connections between our users and the server are encrypted using the TLS (Transport Layer Security) protocol. This guarantees that:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="text-green-800 font-bold mt-1">✓</span>
                    <span className="text-gray-700">Data is encrypted end-to-end, preventing unauthorized access.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-800 font-bold mt-1">✓</span>
                    <span className="text-gray-700">The server identity is authenticated, ensuring users connect to the genuine service.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-800 font-bold mt-1">✓</span>
                    <span className="text-gray-700">The integrity of information is maintained, so no tampering can occur during transmission.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6">
                <p className="text-gray-800">
                  <strong>Compliance:</strong> AWS services have been subjected to strict SOC1, SOC2 and SOC3 compliance checks by independent international inspection organizations.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section id="service-providers">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-800 text-white rounded-full flex items-center justify-center font-bold text-xl">
                7
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Service Providers</h2>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-800">
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the services of various third parties to facilitate provision of our services, such as hosting and printing your personalized newspaper.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We may share your personal data with these service providers when they are subject to obligations in accordance with this Privacy Policy and any other appropriate privacy and security measures, provided that such third parties use your personal data only on our behalf and according to our instructions.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="your-rights">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-800 text-white rounded-full flex items-center justify-center font-bold text-xl">
                8
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Your Rights & Choices</h2>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-800">
              <p className="text-gray-700 leading-relaxed mb-6">
                The person whose personal data is collected has the following associated rights:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Access & Correction</h4>
                  <p className="text-gray-700 text-sm">Request access to your personal data or require correction/deletion</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Data Portability</h4>
                  <p className="text-gray-700 text-sm">Request portability of your data</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Object to Processing</h4>
                  <p className="text-gray-700 text-sm">Oppose automated decision-making and profiling</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">Lodge Appeal</h4>
                  <p className="text-gray-700 text-sm">File a complaint with the competent authority</p>
                </div>
              </div>
              
              <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-6">
                <h4 className="font-bold text-gray-900 mb-2">How to Exercise Your Rights</h4>
                <p className="text-gray-700 mb-2">
                  Contact us at: <a href="mailto:compliance@newsofthetribe.com" className="text-green-800 hover:underline font-semibold">compliance@newsofthetribe.com</a>
                </p>
                <p className="text-gray-700 text-sm">
                  Requests will be processed without undue delay (typically within 30 working days).
                </p>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section id="cookies">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-800 text-white rounded-full flex items-center justify-center font-bold text-xl">
                9
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Use of Cookies</h2>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-800 space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Our site uses cookies provided by Google Analytics and Google Tag Manager for statistical purposes and to optimize our services.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-3">Cookie Management</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Cookies expire within a reasonable period</li>
                  <li>• You can manage cookie preferences in your browser</li>
                  <li>• You can delete stored cookies at any time</li>
                  <li>• Some app features may not work without cookies</li>
                </ul>
              </div>
              <p className="text-gray-700 text-sm italic">
                Users may adjust their browser settings to refuse cookies. However, some services may not work properly if cookies are disabled.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="contact">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-800 text-white rounded-full flex items-center justify-center font-bold text-xl">
                10
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            </div>
            <div className="bg-gradient-to-br from-green-800 to-green-900 text-white p-8 rounded-xl shadow-lg">
              <p className="text-xl mb-6">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <p className="text-lg mb-2">
                  <strong>Email:</strong> <a href="mailto:compliance@newsofthetribe.com" className="text-amber-300 hover:underline">compliance@newsofthetribe.com</a>
                </p>
                <p className="text-green-100 text-sm mt-4">
                  We may update this Privacy Policy periodically. Any changes will be posted in the App with a revised "Effective Date."
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* Back to Home */}
        <div className="mt-16 text-center pt-12 border-t-2 border-gray-200">
          <a 
            href="/"
            className="inline-block bg-green-800 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-900 transition-colors shadow-lg"
          >
            ← Back to Home
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-16">
        <div className="max-w-5xl mx-auto text-center">
          <img 
            src="/images/logo.png" 
            alt="News of the Tribe" 
            className="h-12 w-auto mx-auto mb-4 brightness-0 invert"
          />
          <p className="text-gray-400 mb-2">© 2024 News of the Tribe. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Last updated: December 26, 2025</p>
        </div>
      </footer>
    </div>
  );
}