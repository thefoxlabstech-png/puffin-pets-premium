# 🐧 Puffin Pets Premium - Next Generation

A premium, fully animated 3D website for Puffin Pets with cutting-edge design and interactive features.

## ✨ Features

✅ **3D Interactive World** - Fully rendered 3D environments with real-time interactions
✅ **Smooth Animations** - Premium animations using Framer Motion
✅ **Mobile Optimized** - Fully responsive design for all devices
✅ **Premium Tiers** - Free, Premium, and Elite subscription plans
✅ **Interactive Pets** - Unique pet personalities and customizations
✅ **Modern UI/UX** - Glass morphism and gradient designs
✅ **Fast Performance** - Optimized with Next.js 14
✅ **TypeScript** - Full type safety and better DX

## 🚀 Tech Stack

- **Next.js 14** - React framework with SSR
- **React 18** - UI library
- **Three.js** - 3D graphics
- **Framer Motion** - Advanced animations
- **Tailwind CSS** - Utility-first CSS
- **TypeScript** - Type safety

## 📋 Prerequisites

- Node.js 18+
- npm or yarn

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/thefoxlabstech-png/puffin-pets-premium.git
cd puffin-pets-premium

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

## 📁 Project Structure

```
puffin-pets-premium/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Features showcase
│   ├── PetShowcase.tsx     # Pet showcase
│   ├── PremiumTiers.tsx    # Pricing tiers
│   ├── Testimonials.tsx    # User testimonials
│   ├── CTA.tsx             # Call to action
│   └── Footer.tsx          # Footer
├── lib/
│   └── utils.ts            # Utility functions
├── store/
│   └── (Redux/Zustand)     # State management
├── public/
│   └── (Static assets)
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
- Primary: `#FF6B6B` (Red)
- Secondary: `#4ECDC4` (Teal)
- Accent: `#FFE66D` (Yellow)
- Premium: `#9B59B6` (Purple)

### Content
Update component content directly in `components/` folder.

### Pets
Add more pets in `PetShowcase.tsx` component.

## 🚀 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Deploy!

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Next.js
5. Deploy!

## 📝 Scripts

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🔄 Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers

## 🐛 Known Issues

None currently. Report issues on GitHub!

## 📧 Support

For support, email support@puffinpets.com or open an issue on GitHub.

## 📄 License

MIT License - feel free to use this project for personal or commercial use.

## 🙏 Credits

Made with ❤️ by Fox Labs Tech

---

**Happy Pet Keeping! 🐧✨**
