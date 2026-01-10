import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link href="/" className="logo">
            <span className="logo-icon">M</span>
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
          background: var(--primary-gradient);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          position: relative;
        }
        .logo-icon::after {
          content: '✨';
          position: absolute;
          top: -4px;
          right: -4px;
          font-size: 12px;
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

