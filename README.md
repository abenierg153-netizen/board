# Yanet Dental Clinic Dashboard

A modern, responsive dental clinic management dashboard built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI with glassmorphism and smooth animations
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive (desktop, tablet, mobile)
- ⚡ Built with Next.js 14 App Router
- 🎯 TypeScript for type safety
- 🎭 Lucide React icons
- 📊 Dashboard with KPIs and metrics
- 👥 Ambassador management system ready
- 🗓️ Appointment scheduling interface (placeholder)
- 💰 Billing and invoicing system (placeholder)

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Charts:** Recharts
- **Theme:** next-themes
- **Validation:** Zod

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript compiler check

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with sidebar and navigation
│   └── page.tsx             # Dashboard home page
├── components/
│   ├── layout/
│   │   ├── sidebar.tsx      # Desktop sidebar navigation
│   │   ├── top-nav.tsx      # Top navigation bar with search & theme toggle
│   │   └── bottom-nav.tsx   # Mobile bottom navigation
│   ├── providers/
│   │   └── theme-provider.tsx  # Theme context provider
│   └── ui/
│       ├── button.tsx       # Reusable button component
│       ├── card.tsx         # Card container component
│       └── kpi.tsx          # KPI metric display component
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Design System

### Colors
- **Primary:** Blue (#2563EB)
- **Secondary:** Cyan (#06B6D4)
- **Background Light:** #ffffff
- **Background Dark:** #0B1220

### Typography
- **Sans:** Inter (body text)
- **Display:** Poppins (headings)

### Key Features
- Glassmorphism cards with backdrop blur
- Smooth fade-in animations
- Custom scrollbar styling
- Responsive grid layouts
- Accessible color contrast

## Navigation Routes (Placeholders)

- `/` - Dashboard (implemented)
- `/appointments` - Appointments management
- `/patients` - Patient records
- `/ambassadors` - Ambassador tracking
- `/billing` - Billing & invoicing
- `/reports` - Analytics & reports
- `/settings` - System settings

## Next Steps

1. Implement appointment scheduling functionality
2. Add patient management system
3. Build ambassador tracking features
4. Create billing and invoicing workflows
5. Add data visualization with Recharts
6. Integrate with backend API
7. Add authentication and authorization

## Contributing

This is a private project for Yanet Dental Clinic.

## License

Proprietary - All rights reserved
