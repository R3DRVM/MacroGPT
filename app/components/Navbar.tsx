'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link href="/" className="logo">
            <div className="logo-icon">
              <Image 
                src="/assets/logo.svg" 
                alt="MacroGPT Logo" 
                width={40} 
                height={40}
                className="logo-image"
              />
              <Sparkles className="logo-sparkle" size={12} />
            </div>
            <span className="logo-text">MacroGPT</span>
          </Link>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/support">Support</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(15, 15, 30, 0.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1000;
          padding: 16px 0;
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 700;
          font-size: 1.5rem;
        }
        .logo-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .logo-image {
          width: 40px;
          height: 40px;
        }
        .logo-sparkle {
          position: absolute;
          top: -4px;
          right: -4px;
          color: white;
          filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5));
        }
        .nav-links {
          display: flex;
          gap: 32px;
        }
        .nav-links a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.3s;
          font-weight: 500;
        }
        .nav-links a:hover {
          color: var(--text-primary);
        }
        @media (max-width: 768px) {
          .nav-links {
            gap: 16px;
            font-size: 0.9rem;
          }
          .logo-text {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </nav>
  )
}

