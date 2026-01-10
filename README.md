# MacroGPT Website

Marketing website and support portal for MacroGPT - AI-Powered Macro Tracking app.

## Features

- **Landing Page**: Marketing page with hero section, features, pricing, testimonials, and CTAs
- **Support Page**: Contact form, email support, and FAQ section
- **Privacy Policy**: Complete legal document covering data collection and usage
- **Terms of Service**: Comprehensive terms including subscriptions, disclaimers, and liability

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- React
- CSS-in-JS (styled-jsx)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

This site is configured for Vercel deployment with static export.

### Vercel Setup

1. Push this repository to GitHub
2. Import the project in Vercel
3. Configure domain: macrogpt.online
4. Update DNS settings in GoDaddy to point to Vercel

### DNS Configuration

In GoDaddy, add the following DNS records (Vercel will provide exact values):

- **A Record**: @ → Vercel IP
- **CNAME Record**: www → cname.vercel-dns.com

Or use Vercel's nameservers if preferred.

## Domain

- Domain: macrogpt.online
- Support Email: support@macrogpt.app

## Color Scheme

The website matches the app's dark purple-blue gradient theme:
- Primary Gradient: #667eea to #764ba2
- Dark Background: #1a1a2e
- Text: White with secondary opacity variations

