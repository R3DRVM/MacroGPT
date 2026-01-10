import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Terms() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <section className="section">
          <div className="container">
            <div className="legal-content">
              <h1 className="section-title">Terms of Service</h1>
              <p className="last-updated">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

              <div className="legal-section">
                <h2>1. Agreement to Terms</h2>
                <p>
                  By accessing or using MacroGPT ("the App," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the App.
                </p>
                <p>
                  These Terms constitute a legally binding agreement between you and MacroGPT. We reserve the right to modify these Terms at any time, and such modifications will be effective immediately upon posting in the App.
                </p>
              </div>

              <div className="legal-section">
                <h2>2. Service Description</h2>
                <p>
                  MacroGPT is a mobile application that provides AI-powered nutritional tracking and analysis services. Our services include:
                </p>
                <ul>
                  <li>Photo-based meal analysis using AI technology (GROK-4)</li>
                  <li>Macronutrient and calorie tracking</li>
                  <li>Personalized meal planning and recommendations</li>
                  <li>AI-powered nutrition coaching and guidance</li>
                  <li>Progress tracking and analytics</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any aspect of the App at any time, with or without notice.
                </p>
              </div>

              <div className="legal-section">
                <h2>3. User Accounts</h2>
                <h3>3.1 Account Creation</h3>
                <p>
                  To use certain features of the App, you may be required to create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
                </p>

                <h3>3.2 Account Security</h3>
                <p>
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                </p>

                <h3>3.3 Account Termination</h3>
                <p>
                  We reserve the right to suspend or terminate your account at any time, with or without cause or notice, for any reason, including if you breach these Terms.
                </p>
              </div>

              <div className="legal-section">
                <h2>4. Subscriptions and Payments</h2>
                <h3>4.1 Subscription Plans</h3>
                <p>
                  MacroGPT offers the following subscription tiers:
                </p>
                <ul>
                  <li><strong>Free:</strong> Basic features with limited functionality</li>
                  <li><strong>Basic ($9.99/month):</strong> Enhanced features including unlimited photo scanning and advanced AI analysis</li>
                  <li><strong>Pro ($19.99/month):</strong> Full access to all features including AI Coach, custom meal plans, and priority support</li>
                </ul>

                <h3>4.2 Payment Terms</h3>
                <p>
                  Subscription fees are billed in advance on a monthly basis. Payments are processed through Apple's App Store payment system. By purchasing a subscription, you authorize Apple to charge your payment method for the subscription fee.
                </p>

                <h3>4.3 Automatic Renewal</h3>
                <p>
                  Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing period. You will be charged the subscription fee for the renewal period within 24 hours prior to the end of the current period.
                </p>

                <h3>4.4 Cancellation</h3>
                <p>
                  You may cancel your subscription at any time through your Apple App Store account settings. Cancellation takes effect at the end of your current billing period. You will continue to have access to premium features until the end of the billing period for which you have already paid.
                </p>

                <h3>4.5 Refunds</h3>
                <p>
                  Refund requests are subject to Apple's refund policy. We do not provide direct refunds. If you believe you are entitled to a refund, please contact Apple Support or reach out to us at support@macrogpt.app.
                </p>

                <h3>4.6 Price Changes</h3>
                <p>
                  We reserve the right to modify subscription prices at any time. Price changes will not affect your current subscription period but will apply to subsequent renewal periods. We will notify you of any price changes in advance.
                </p>
              </div>

              <div className="legal-section">
                <h2>5. Acceptable Use Policy</h2>
                <p>You agree not to:</p>
                <ul>
                  <li>Use the App for any illegal purpose or in violation of any laws or regulations</li>
                  <li>Upload, post, or transmit any content that is harmful, offensive, defamatory, or violates any third-party rights</li>
                  <li>Attempt to gain unauthorized access to the App, other users' accounts, or our systems</li>
                  <li>Reverse engineer, decompile, or disassemble any part of the App</li>
                  <li>Use automated systems (bots, scrapers) to access the App without permission</li>
                  <li>Interfere with or disrupt the App's functionality or servers</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
                  <li>Collect or harvest information about other users without their consent</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>6. Intellectual Property</h2>
                <h3>6.1 Our Rights</h3>
                <p>
                  The App, including its design, features, functionality, content, and all intellectual property rights therein, are owned by MacroGPT or our licensors. The App is protected by copyright, trademark, and other intellectual property laws.
                </p>

                <h3>6.2 Limited License</h3>
                <p>
                  We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the App for your personal, non-commercial use in accordance with these Terms.
                </p>

                <h3>6.3 User Content</h3>
                <p>
                  You retain ownership of any content you upload or create in the App (e.g., meal photos, descriptions). By using the App, you grant us a license to use, store, and process such content solely for the purpose of providing and improving our services.
                </p>
              </div>

              <div className="legal-section">
                <h2>7. Disclaimers</h2>
                <h3>7.1 Medical Disclaimer</h3>
                <p>
                  <strong>IMPORTANT:</strong> MacroGPT provides nutritional estimates and tracking tools for informational purposes only. The App is NOT intended to diagnose, treat, cure, or prevent any disease or medical condition.
                </p>
                <p>
                  The nutritional information provided by our AI is an ESTIMATE and should not be considered medical advice. Always consult with qualified healthcare professionals, registered dietitians, or physicians before making significant changes to your diet or nutrition plan.
                </p>
                <p>
                  MacroGPT is NOT a substitute for professional medical advice, diagnosis, or treatment. Never disregard professional medical advice or delay seeking it because of information provided by this App.
                </p>

                <h3>7.2 Service Availability</h3>
                <p>
                  We do not guarantee that the App will be available at all times, uninterrupted, or error-free. The App may be subject to maintenance, updates, or technical issues that may cause temporary unavailability.
                </p>

                <h3>7.3 Accuracy of Information</h3>
                <p>
                  While we strive for accuracy, the AI-generated nutritional estimates are approximations and may not be 100% accurate. Actual nutritional values may vary based on preparation methods, portion sizes, and other factors.
                </p>
              </div>

              <div className="legal-section">
                <h2>8. Limitation of Liability</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, MACROGPT AND ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                </p>
                <ul>
                  <li>Your use or inability to use the App</li>
                  <li>Any errors or omissions in the App's content or functionality</li>
                  <li>Any unauthorized access to or use of our servers or your data</li>
                  <li>Any interruption or cessation of transmission to or from the App</li>
                  <li>Any bugs, viruses, or other harmful code transmitted through the App</li>
                </ul>
                <p>
                  OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE USE OF OR INABILITY TO USE THE APP SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE (12) MONTHS PRIOR TO THE CLAIM, OR $100, WHICHEVER IS GREATER.
                </p>
              </div>

              <div className="legal-section">
                <h2>9. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless MacroGPT and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or relating to:
                </p>
                <ul>
                  <li>Your use of the App</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any third-party rights</li>
                  <li>Any content you submit, post, or transmit through the App</li>
                </ul>
              </div>

              <div className="legal-section">
                <h2>10. Third-Party Services</h2>
                <p>
                  The App may integrate with or link to third-party services, including but not limited to:
                </p>
                <ul>
                  <li>xAI (GROK-4) for AI analysis</li>
                  <li>RevenueCat for subscription management</li>
                  <li>Apple App Store for app distribution and payments</li>
                </ul>
                <p>
                  Your use of third-party services is subject to their respective terms of service and privacy policies. We are not responsible for the practices of third-party services.
                </p>
              </div>

              <div className="legal-section">
                <h2>11. Termination</h2>
                <p>
                  We may terminate or suspend your access to the App immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the App will cease immediately.
                </p>
                <p>
                  You may terminate your account at any time by deleting the App or contacting us at support@macrogpt.app.
                </p>
              </div>

              <div className="legal-section">
                <h2>12. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which MacroGPT operates, without regard to its conflict of law provisions.
                </p>
              </div>

              <div className="legal-section">
                <h2>13. Dispute Resolution</h2>
                <p>
                  Any disputes arising out of or relating to these Terms or the App shall be resolved through binding arbitration in accordance with applicable arbitration rules, except where prohibited by law.
                </p>
              </div>

              <div className="legal-section">
                <h2>14. Severability</h2>
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
                </p>
              </div>

              <div className="legal-section">
                <h2>15. Entire Agreement</h2>
                <p>
                  These Terms, together with our Privacy Policy, constitute the entire agreement between you and MacroGPT regarding the use of the App and supersede all prior agreements and understandings.
                </p>
              </div>

              <div className="legal-section">
                <h2>16. Contact Us</h2>
                <p>
                  If you have questions about these Terms, please contact us at:
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

