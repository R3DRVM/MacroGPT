'use client'

import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Camera, Zap, Target, Bot, BarChart3, UtensilsCrossed, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <div className="hero-icon">
                <Image 
                  src="/assets/logo.svg" 
                  alt="MacroGPT Logo" 
                  width={120} 
                  height={120}
                  className="logo-image"
                />
                <Sparkles className="icon-star" size={24} />
              </div>
              <h1 className="hero-title">MacroGPT</h1>
              <p className="hero-subtitle">AI-Powered Macro Tracking</p>
              <p className="hero-description">
                Track smarter, not harder. Use AI to effortlessly monitor your nutrition and hit your fitness goals.
              </p>
              <div className="hero-cta">
                <a href="https://apps.apple.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Download on App Store
                </a>
                <a href="#features" className="btn btn-secondary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <style jsx>{`
            .hero {
              min-height: 90vh;
              display: flex;
              align-items: center;
              background: linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 50%, #0f0f1e 100%);
              position: relative;
              overflow: hidden;
            }
            .hero::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: radial-gradient(circle at 50% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
            }
            .hero-content {
              text-align: center;
              position: relative;
              z-index: 1;
            }
            .hero-icon {
              width: 120px;
              height: 120px;
              margin: 0 auto 32px;
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
            }
            .logo-image {
              width: 120px;
              height: 120px;
            }
            .icon-star {
              position: absolute;
              top: -8px;
              right: -8px;
              color: white;
              filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.5));
            }
            .hero-title {
              font-size: 4rem;
              font-weight: 700;
              margin-bottom: 16px;
              background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            .hero-subtitle {
              font-size: 1.5rem;
              color: var(--text-secondary);
              margin-bottom: 24px;
            }
            .hero-description {
              font-size: 1.2rem;
              color: var(--text-secondary);
              max-width: 600px;
              margin: 0 auto 40px;
              line-height: 1.8;
            }
            .hero-cta {
              display: flex;
              gap: 20px;
              justify-content: center;
              flex-wrap: wrap;
            }
            @media (max-width: 768px) {
              .hero-title {
                font-size: 2.5rem;
              }
              .hero-subtitle {
                font-size: 1.2rem;
              }
              .hero-description {
                font-size: 1rem;
              }
              .hero-icon {
                width: 100px;
                height: 100px;
              }
              .logo-image {
                width: 100px;
                height: 100px;
              }
              .premium-image {
                height: 200px;
              }
              .image-overlay {
                opacity: 1;
              }
              .testimonial-banner {
                height: 250px;
              }
            }
          `}</style>
        </section>

        {/* Visual Showcase Section */}
        <section className="section showcase-section">
          <div className="container">
            <h2 className="section-title">Transform Your Nutrition Journey</h2>
            <p className="section-subtitle">
              Join a community of fitness enthusiasts achieving their goals
            </p>
            <div className="premium-images">
              <div className="premium-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80" 
                  alt="Healthy food" 
                  className="premium-image"
                  loading="lazy"
                />
                <div className="image-overlay">
                  <h3>Nutritious Meals</h3>
                  <p>Track every bite with precision</p>
                </div>
              </div>
              <div className="premium-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" 
                  alt="Fitness gym" 
                  className="premium-image"
                  loading="lazy"
                />
                <div className="image-overlay">
                  <h3>Gym Performance</h3>
                  <p>Fuel your workouts optimally</p>
                </div>
              </div>
              <div className="premium-image-wrapper">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80" 
                  alt="Workout" 
                  className="premium-image"
                  loading="lazy"
                />
                <div className="image-overlay">
                  <h3>Active Lifestyle</h3>
                  <p>Stay on track, anywhere</p>
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            .showcase-section {
              background: var(--darker-bg);
            }
            .premium-images {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 24px;
              margin: 48px 0;
            }
            .premium-image-wrapper {
              border-radius: 16px;
              overflow: hidden;
              position: relative;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
              transition: transform 0.3s, box-shadow 0.3s;
            }
            .premium-image-wrapper:hover {
              transform: translateY(-4px);
              box-shadow: 0 15px 40px rgba(102, 126, 234, 0.3);
            }
            .premium-image-wrapper:hover .image-overlay {
              opacity: 1;
            }
            .premium-image {
              width: 100%;
              height: 250px;
              object-fit: cover;
            }
            .image-overlay {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
              padding: 24px;
              opacity: 0;
              transition: opacity 0.3s;
            }
            .image-overlay h3 {
              color: white;
              font-size: 1.5rem;
              margin-bottom: 8px;
            }
            .image-overlay p {
              color: rgba(255, 255, 255, 0.9);
              font-size: 1rem;
            }
          `}</style>
        </section>

        {/* Features Section */}
        <section id="features" className="section">
          <div className="container">
            <h2 className="section-title">Track Smarter, Not Harder</h2>
            <p className="section-subtitle">
              Powerful features to help you achieve your nutrition goals
            </p>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <Camera size={48} strokeWidth={1.5} />
                </div>
                <h3>Snap & Describe</h3>
                <p>Photo + chat for accurate macros. Just take a picture and let AI do the rest.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Zap size={48} strokeWidth={1.5} />
                </div>
                <h3>Powered by GROK-4</h3>
                <p>Advanced AI macro analysis powered by cutting-edge technology.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Target size={48} strokeWidth={1.5} />
                </div>
                <h3>Hit Your Goals</h3>
                <p>Personalized daily targets tailored to your fitness journey.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Bot size={48} strokeWidth={1.5} />
                </div>
                <h3>AI Coach</h3>
                <p>Get personalized meal plans, workout ideas, and nutrition guidance.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <BarChart3 size={48} strokeWidth={1.5} />
                </div>
                <h3>Progress Tracking</h3>
                <p>Monitor your macros, calories, and progress over time with detailed analytics.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <UtensilsCrossed size={48} strokeWidth={1.5} />
                </div>
                <h3>Meal Planning</h3>
                <p>Get AI-generated meal plans that fit your dietary preferences and goals.</p>
              </div>
            </div>
          </div>
          <style jsx>{`
            .features-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 32px;
              margin-top: 48px;
            }
            .feature-card {
              background: var(--card-bg);
              backdrop-filter: blur(10px);
              border-radius: 16px;
              padding: 32px;
              border: 1px solid rgba(255, 255, 255, 0.1);
              transition: transform 0.3s, box-shadow 0.3s;
            }
            .feature-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
            }
            .feature-icon {
              margin-bottom: 16px;
              color: var(--accent-purple);
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .feature-card h3 {
              font-size: 1.5rem;
              margin-bottom: 12px;
              color: var(--text-primary);
            }
            .feature-card p {
              color: var(--text-secondary);
              line-height: 1.6;
            }
            @media (max-width: 768px) {
              .features-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>
        </section>

        {/* Pricing Section */}
        <section className="section" style={{ background: 'var(--darker-bg)' }}>
          <div className="container">
            <h2 className="section-title">Choose Your Plan</h2>
            <p className="section-subtitle">
              Start free and upgrade when you're ready for more features
            </p>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Free</h3>
                <div className="price">$0<span>/month</span></div>
                <ul className="pricing-features">
                  <li>✓ Basic macro tracking</li>
                  <li>✓ Photo scanning (limited)</li>
                  <li>✓ Basic AI analysis</li>
                  <li>✓ Daily calorie goals</li>
                </ul>
                <a href="https://apps.apple.com" className="btn btn-secondary" style={{ width: '100%', textAlign: 'center' }}>
                  Get Started
                </a>
              </div>
              <div className="pricing-card featured">
                <div className="badge">Popular</div>
                <h3>Basic</h3>
                <div className="price">$9.99<span>/month</span></div>
                <ul className="pricing-features">
                  <li>✓ Unlimited photo scanning</li>
                  <li>✓ Advanced GROK-4 analysis</li>
                  <li>✓ AI meal suggestions</li>
                  <li>✓ Progress tracking</li>
                  <li>✓ Export data</li>
                </ul>
                <a href="https://apps.apple.com" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Upgrade Now
                </a>
              </div>
              <div className="pricing-card">
                <h3>Pro</h3>
                <div className="price">$19.99<span>/month</span></div>
                <ul className="pricing-features">
                  <li>✓ Everything in Basic</li>
                  <li>✓ AI Coach access</li>
                  <li>✓ Custom meal plans</li>
                  <li>✓ Workout recommendations</li>
                  <li>✓ Priority support</li>
                  <li>✓ Advanced analytics</li>
                </ul>
                <a href="https://apps.apple.com" className="btn btn-secondary" style={{ width: '100%', textAlign: 'center' }}>
                  Go Pro
                </a>
              </div>
            </div>
          </div>
          <style jsx>{`
            .pricing-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 32px;
              margin-top: 48px;
            }
            .pricing-card {
              background: var(--card-bg);
              backdrop-filter: blur(10px);
              border-radius: 20px;
              padding: 40px 32px;
              border: 1px solid rgba(255, 255, 255, 0.1);
              position: relative;
              transition: transform 0.3s, box-shadow 0.3s;
            }
            .pricing-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
            }
            .pricing-card.featured {
              border: 2px solid var(--accent-purple);
              transform: scale(1.05);
            }
            .pricing-card.featured:hover {
              transform: scale(1.05) translateY(-8px);
            }
            .badge {
              position: absolute;
              top: -12px;
              right: 20px;
              background: var(--primary-gradient);
              color: white;
              padding: 6px 16px;
              border-radius: 20px;
              font-size: 0.85rem;
              font-weight: 600;
            }
            .pricing-card h3 {
              font-size: 1.8rem;
              margin-bottom: 16px;
              color: var(--text-primary);
            }
            .price {
              font-size: 3rem;
              font-weight: 700;
              margin-bottom: 24px;
              background: var(--primary-gradient);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            .price span {
              font-size: 1rem;
              color: var(--text-secondary);
              -webkit-text-fill-color: var(--text-secondary);
            }
            .pricing-features {
              list-style: none;
              margin-bottom: 32px;
            }
            .pricing-features li {
              padding: 12px 0;
              color: var(--text-secondary);
              border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            }
            @media (max-width: 768px) {
              .pricing-grid {
                grid-template-columns: 1fr;
              }
              .pricing-card.featured {
                transform: scale(1);
              }
            }
          `}</style>
        </section>

        {/* Testimonials Section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">What Users Say</h2>
            <p className="section-subtitle">
              Join thousands of users achieving their nutrition goals
            </p>
            <div className="testimonial-hero-image">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80" 
                alt="Fitness influencer" 
                className="testimonial-banner"
                loading="lazy"
              />
            </div>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>"MacroGPT has completely changed how I track my nutrition. The AI photo scanning is incredibly accurate!"</p>
                <div className="testimonial-author">- Sarah M.</div>
              </div>
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>"Finally, an app that makes macro tracking effortless. The AI coach feature is like having a nutritionist in my pocket."</p>
                <div className="testimonial-author">- Mike T.</div>
              </div>
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p>"The GROK-4 analysis is mind-blowing. It recognizes everything I eat and gives me accurate macros instantly."</p>
                <div className="testimonial-author">- Jessica L.</div>
              </div>
            </div>
          </div>
          <style jsx>{`
            .testimonial-hero-image {
              margin: 48px 0;
              border-radius: 20px;
              overflow: hidden;
              box-shadow: 0 15px 50px rgba(0, 0, 0, 0.4);
            }
            .testimonial-banner {
              width: 100%;
              height: 400px;
              object-fit: cover;
            }
            .testimonials-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 32px;
              margin-top: 48px;
            }
            .testimonial-card {
              background: var(--card-bg);
              backdrop-filter: blur(10px);
              border-radius: 16px;
              padding: 32px;
              border: 1px solid rgba(255, 255, 255, 0.1);
            }
            .stars {
              color: #ffd700;
              font-size: 1.2rem;
              margin-bottom: 16px;
            }
            .testimonial-card p {
              color: var(--text-secondary);
              line-height: 1.8;
              margin-bottom: 20px;
              font-style: italic;
            }
            .testimonial-author {
              color: var(--text-primary);
              font-weight: 600;
            }
          `}</style>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ background: 'var(--darker-bg)' }}>
          <div className="container">
            <div className="cta-content">
              <h2 className="section-title">Ready to Transform Your Nutrition?</h2>
              <p className="section-subtitle">
                Download MacroGPT today and start tracking smarter
              </p>
              <div style={{ textAlign: 'center', marginTop: '32px' }}>
                <a href="https://apps.apple.com" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Download on App Store
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

