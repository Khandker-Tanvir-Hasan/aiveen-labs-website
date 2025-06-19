# Aiveen Labs Website

A modern, high-conversion single-page website for Aiveen Labs, an enterprise tech consultancy and development services company.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Fast performance with Next.js 14
- 📱 Mobile-first responsive design
- 🎭 Smooth animations with Framer Motion
- 📧 Contact form for lead generation
- 🎯 High-conversion optimized layout
- 🔍 SEO optimized

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aiveen-labs-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Customization

### Colors
Update the primary and secondary color schemes in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... customize your brand colors
  }
}
```

### Content
Modify the content in `app/page.tsx`:
- Company information
- Services offered
- Testimonials
- Contact details

### Styling
Custom styles can be added in `app/globals.css` using Tailwind's `@layer` directive.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

The built files will be in the `.next` directory.

## Performance

This website is optimized for:
- ⚡ Fast loading times
- 📱 Mobile performance
- 🔍 SEO best practices
- ♿ Accessibility standards

## License

This project is licensed under the MIT License.

## Support

For support or questions, contact hello@aiveenlabs.com 