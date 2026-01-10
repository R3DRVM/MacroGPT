'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>MacroGPT</h3>
            <p>AI-Powered Macro Tracking</p>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <Link href="/support">Contact Support</Link>
            <a href="mailto:support@macrogpt.app">support@macrogpt.app</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} MacroGPT. All rights reserved.</p>
        </div>
      </div>
      <style jsx>{`
        .footer {
          background: var(--darker-bg);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 60px 0 30px;
          margin-top: 80px;
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }
        .footer-section h3,
        .footer-section h4 {
          margin-bottom: 16px;
          color: var(--text-primary);
        }
        .footer-section p {
          color: var(--text-secondary);
          margin-bottom: 12px;
        }
        .footer-section a {
          display: block;
          color: var(--text-secondary);
          text-decoration: none;
          margin-bottom: 8px;
          transition: color 0.3s;
        }
        .footer-section a:hover {
          color: var(--text-primary);
        }
        .footer-bottom {
          text-align: center;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
      `}</style>
    </footer>
  )
}

