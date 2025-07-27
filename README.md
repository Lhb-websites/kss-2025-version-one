# KaizenStrategy Solutions LLC Website

A modern React TypeScript website for KaizenStrategy Solutions LLC, featuring SPA routing and responsive design.

## Features

- **SPA Routing**: Client-side routing with React Router DOM
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **TypeScript**: Full TypeScript support for better development experience
- **Modern UI**: Clean, professional design with Lucide React icons
- **Performance Optimized**: Code splitting and optimized builds

## Pages

- **Home** (`/`) - Landing page with company overview
- **About** (`/about`) - Company information and team details
- **Industries** (`/industries`) - Industries served
- **Services** (`/services`) - Service offerings
- **Packages** (`/packages`) - Service packages and pricing
- **Resources** (`/resources`) - Blog posts, ebooks, and resources
- **Contact** (`/contact`) - Contact information and form
- **FAQ** (`/faq`) - Frequently asked questions
- **404** (`*`) - Not found page for invalid routes

## Routing Setup

The application uses React Router DOM for client-side routing. Key features:

- **Scroll Restoration**: Automatically scrolls to top on route changes
- **404 Handling**: Custom 404 page for invalid routes
- **Active Link Highlighting**: Visual feedback for current page
- **Mobile Navigation**: Responsive navigation with hamburger menu

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Netlify
The project includes a `public/_redirects` file for Netlify deployment:
```
/*    /index.html   200
```

### Vercel
The project includes a `vercel.json` file for Vercel deployment with SPA routing support.

### Other Platforms
For other deployment platforms, ensure that all routes redirect to `index.html` to support client-side routing.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Industries.tsx
│   ├── Services.tsx
│   ├── Packages.tsx
│   ├── Resources.tsx
│   ├── Contact.tsx
│   └── FAQ.tsx
├── App.tsx             # Main app component with routing
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool and dev server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - KaizenStrategy Solutions LLC
