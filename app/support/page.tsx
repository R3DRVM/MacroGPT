'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Support() {
  const [formData, setFormData] = useState({
    category: 'General',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { category, subject, message } = formData
    const emailSubject = encodeURIComponent(`[${category}] ${subject}`)
    const emailBody = encodeURIComponent(message)
    window.location.href = `mailto:support@macrogpt.online?subject=${emailSubject}&body=${emailBody}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <section className="section">
          <div className="container">
            <h1 className="section-title">Support</h1>
            <p className="section-subtitle">
              We're here to help! Reach out to us with any questions or issues.
            </p>

            <div className="support-grid">
              {/* Quick Contact */}
              <div className="support-card">
                <h2>Quick Contact</h2>
                <p>Send us an email directly:</p>
                <a href="mailto:support@macrogpt.online" className="email-link">
                  support@macrogpt.online
                </a>
              </div>

              {/* Contact Form */}
              <div className="support-card">
                <h2>Contact Form</h2>
                <p>Fill out the form below and we'll get back to you:</p>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="General">General Inquiry</option>
                      <option value="Bug Report">Bug Report</option>
                      <option value="Feature Request">Feature Request</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Brief description of your issue"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Send Email
                  </button>
                </form>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="faq-section">
              <h2 className="section-title" style={{ marginTop: '80px' }}>Frequently Asked Questions</h2>
              <div className="faq-grid">
                <div className="faq-item">
                  <h3>How does the photo scanning work?</h3>
                  <p>Simply take a photo of your meal and our AI (powered by GROK-4) will analyze it to estimate macros and calories. You can also add a description for more accurate results.</p>
                </div>
                <div className="faq-item">
                  <h3>Is my data secure?</h3>
                  <p>Yes! We take privacy seriously. All data is stored locally on your device, and we only use minimal data for app functionality. See our Privacy Policy for details.</p>
                </div>
                <div className="faq-item">
                  <h3>Can I cancel my subscription?</h3>
                  <p>Yes, you can cancel your subscription at any time through your Apple App Store account settings. Cancellation takes effect at the end of your billing period.</p>
                </div>
                <div className="faq-item">
                  <h3>Does the app provide medical advice?</h3>
                  <p>No. MacroGPT provides nutritional estimates and tracking tools, but it is not a substitute for professional medical advice. Always consult with healthcare professionals for medical concerns.</p>
                </div>
                <div className="faq-item">
                  <h3>How accurate are the macro estimates?</h3>
                  <p>Our AI provides estimates based on visual analysis. While we strive for accuracy, these are estimates and may vary. For precise tracking, consider verifying with nutrition labels when available.</p>
                </div>
                <div className="faq-item">
                  <h3>What devices are supported?</h3>
                  <p>MacroGPT is currently available for iOS devices through the App Store. We're working on expanding to other platforms.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        .support-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 32px;
          margin-top: 48px;
        }
        .support-card {
          background: var(--card-bg);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 32px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .support-card h2 {
          font-size: 1.8rem;
          margin-bottom: 16px;
          color: var(--text-primary);
        }
        .support-card p {
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        .email-link {
          display: inline-block;
          color: var(--accent-purple);
          font-size: 1.2rem;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s;
        }
        .email-link:hover {
          color: var(--accent-blue);
        }
        .contact-form {
          margin-top: 24px;
        }
        .form-group {
          margin-bottom: 24px;
        }
        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: var(--text-primary);
          font-weight: 500;
        }
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: var(--text-primary);
          font-size: 16px;
          font-family: inherit;
        }
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--accent-purple);
          background: rgba(255, 255, 255, 0.08);
        }
        .form-group textarea {
          resize: vertical;
        }
        .faq-section {
          margin-top: 80px;
        }
        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-top: 48px;
        }
        .faq-item {
          background: var(--card-bg);
          backdrop-filter: blur(10px);
          border-radius: 12px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .faq-item h3 {
          font-size: 1.2rem;
          margin-bottom: 12px;
          color: var(--text-primary);
        }
        .faq-item p {
          color: var(--text-secondary);
          line-height: 1.6;
        }
        @media (max-width: 768px) {
          .support-grid {
            grid-template-columns: 1fr;
          }
          .faq-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

