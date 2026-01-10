'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <section className="section">
          <div className="container">
            <div className="legal-content">
              <h1 className="section-title">Privacy Policy</h1>
              <p className="last-updated">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

              <div className="legal-section">
                <h2>1. Introduction</h2>
                <p>
                  Welcome to MacroGPT ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience while using our mobile application ("App"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our App.
                </p>
                <p>
                  By using MacroGPT, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our App.
                </p>
              </div>

              <div className="legal-section">
                <h2>2. Information We Collect</h2>
                <h3>2.1 Information You Provide</h3>
                <ul>
                  <li><strong>Account Information:</strong> When you create an account, we may collect your email address and other account-related information.</li>
                  <li><strong>Meal Data:</strong> Photos of meals, descriptions, and nutritional information you input or that we generate through AI analysis.</li>
                  <li><strong>Health Goals:</strong> Your fitness goals, target macros, calorie targets, and other preferences you set in the App.</li>
                  <li><strong>Communication:</strong> Information you provide when contacting our support team.</li>
                </ul>

                <h3>2.2 Automatically Collected Information</h3>
                <ul>
                  <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers, and mobile network information.</li>
                  <li><strong>Usage Data:</strong> How you interact with the App, features used, and time spent in the App.</li>
                  <li><strong>App Performance:</strong> Crash reports, performance metrics, and error logs to improve App functionality.</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                  <li>Provide, maintain, and improve our App services</li>
                  <li>Process and analyze meal photos using AI technology (GROK-4) to estimate nutritional information</li>
                  <li>Personalize your experience and provide customized meal plans and recommendations</li>
                  <li>Process subscription payments and manage your account</li>
                  <li>Send you updates, notifications, and support communications</li>
                  <li>Detect, prevent, and address technical issues and security threats</li>
                  <li>Comply with legal obligations and enforce our Terms of Service</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>4. Local Storage Practices</h2>
                <p>
                  MacroGPT prioritizes your privacy by storing most data locally on your device. This includes:
                </p>
                <ul>
                  <li>Meal photos and descriptions</li>
                  <li>Nutritional data and meal logs</li>
                  <li>Personal goals and preferences</li>
                  <li>Progress tracking information</li>
                </ul>
                <p>
                  Data stored locally remains on your device and is not automatically transmitted to our servers unless necessary for App functionality (such as AI analysis or cloud backup features you enable).
                </p>
              </div>

              <div className="legal-section">
                <h2>5. Third-Party Services</h2>
                <p>We use the following third-party services that may collect or process your information:</p>
                
                <h3>5.1 xAI (GROK-4)</h3>
                <p>
                  We use xAI's GROK-4 technology to analyze meal photos and provide nutritional estimates. When you submit a photo for analysis, it may be processed by xAI's services. Please review xAI's privacy policy for information on how they handle data.
                </p>

                <h3>5.2 RevenueCat</h3>
                <p>
                  We use RevenueCat to manage in-app subscriptions and purchases. RevenueCat may collect information related to your subscription status and purchase history. This information is used to manage your subscription and provide customer support.
                </p>

                <h3>5.3 Apple</h3>
                <p>
                  If you download MacroGPT through the Apple App Store, Apple may collect certain information as outlined in their privacy policy. Subscription payments are processed through Apple's payment system, and we receive only the information necessary to manage your subscription.
                </p>

                <h3>5.4 Analytics Services</h3>
                <p>
                  We may use analytics services to understand how users interact with our App. These services collect aggregated, anonymized data that helps us improve the App experience.
                </p>
              </div>

              <div className="legal-section">
                <h2>6. Data Sharing and Disclosure</h2>
                <p>We do not sell your personal information. We may share your information only in the following circumstances:</p>
                <ul>
                  <li><strong>Service Providers:</strong> With third-party service providers who perform services on our behalf (e.g., AI analysis, payment processing, analytics)</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (with notice to users)</li>
                  <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>7. Your Rights and Choices</h2>
                <h3>7.1 Access and Export</h3>
                <p>
                  You have the right to access the personal information we hold about you. You can export your meal data and nutritional information through the App's export features.
                </p>

                <h3>7.2 Correction</h3>
                <p>
                  You can update or correct your account information and preferences directly within the App settings.
                </p>

                <h3>7.3 Deletion</h3>
                <p>
                  You can request deletion of your account and associated data by contacting us at support@macrogpt.app. Note that some information may be retained as required by law or for legitimate business purposes.
                </p>

                <h3>7.4 Opt-Out</h3>
                <p>
                  You can opt out of non-essential communications and certain data collection through your device settings or App preferences.
                </p>
              </div>

              <div className="legal-section">
                <h2>8. Children's Privacy</h2>
                <p>
                  MacroGPT is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at support@macrogpt.app, and we will delete such information.
                </p>
              </div>

              <div className="legal-section">
                <h2>9. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div className="legal-section">
                <h2>10. Medical Disclaimer</h2>
                <p>
                  <strong>IMPORTANT:</strong> MacroGPT provides nutritional estimates and tracking tools for informational purposes only. The App is not intended to diagnose, treat, cure, or prevent any disease or medical condition. The nutritional information provided by our AI is an estimate and should not be considered medical advice.
                </p>
                <p>
                  Always consult with qualified healthcare professionals, registered dietitians, or physicians before making significant changes to your diet or nutrition plan, especially if you have underlying health conditions, are pregnant, or are taking medications.
                </p>
                <p>
                  MacroGPT is not a substitute for professional medical advice, diagnosis, or treatment. Never disregard professional medical advice or delay seeking it because of information provided by this App.
                </p>
              </div>

              <div className="legal-section">
                <h2>11. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using our App, you consent to the transfer of your information to these countries.
                </p>
              </div>

              <div className="legal-section">
                <h2>12. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy in the App and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>

              <div className="legal-section">
                <h2>13. Contact Us</h2>
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                </p>
                <p>
                  <strong>Email:</strong> support@macrogpt.app<br />
                  <strong>Website:</strong> macrogpt.online
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        .legal-content {
          max-width: 900px;
          margin: 0 auto;
        }
        .last-updated {
          text-align: center;
          color: var(--text-secondary);
          margin-bottom: 40px;
          font-style: italic;
        }
        .legal-section {
          margin-bottom: 40px;
          background: var(--card-bg);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 32px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .legal-section h2 {
          font-size: 1.8rem;
          margin-bottom: 16px;
          color: var(--text-primary);
          margin-top: 0;
        }
        .legal-section h3 {
          font-size: 1.3rem;
          margin-top: 24px;
          margin-bottom: 12px;
          color: var(--text-primary);
        }
        .legal-section p {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 16px;
        }
        .legal-section ul {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-left: 24px;
          margin-bottom: 16px;
        }
        .legal-section li {
          margin-bottom: 8px;
        }
        .legal-section strong {
          color: var(--text-primary);
        }
        @media (max-width: 768px) {
          .legal-section {
            padding: 24px;
          }
          .legal-section h2 {
            font-size: 1.5rem;
          }
          .legal-section h3 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </>
  )
}

