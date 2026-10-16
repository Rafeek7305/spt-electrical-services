import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const routes = [
  {
    dir: 'services',
    title: 'Electrical Services in Tirunelveli & Palayamkottai | S.P.T.',
    description: 'Professional electrical installation, house rewiring, panel maintenance, LED lighting & diagnostic repairs in Tirunelveli & Palayamkottai by S.P.T.',
    canonical: 'https://sptelectricalscliniclab.com/services'
  },
  {
    dir: 'about',
    title: 'About Us | S.P.T. Electrical Services | Tirunelveli Electrician',
    description: 'Learn about S.P.T. Electrical Services. Providing reliable, code-compliant electrical work, wiring, and repairs across Tirunelveli and Palayamkottai.',
    canonical: 'https://sptelectricalscliniclab.com/about'
  },
  {
    dir: 'projects',
    title: 'Electrical Projects & Work Portfolio | S.P.T. Electrical Services',
    description: 'Browse completed residential, commercial, and panel installation projects by S.P.T. Electrical Services in Tirunelveli, Palayamkottai, and surrounding areas.',
    canonical: 'https://sptelectricalscliniclab.com/projects'
  },
  {
    dir: 'contact',
    title: 'Contact S.P.T. Electrical Services | Call +91 94869 39201',
    description: 'Contact S.P.T. Electrical Services in Tirunelveli & Palayamkottai. Call or WhatsApp +91 94869 39201 for prompt electrical installations, rewiring & repairs.',
    canonical: 'https://sptelectricalscliniclab.com/contact'
  }
];

function generateRouteHtml() {
  const indexPath = path.join(distDir, 'index.html');
  if (!fs.existsSync(indexPath)) {
    console.error('dist/index.html not found. Run vite build first.');
    return;
  }

  const baseHtml = fs.readFileSync(indexPath, 'utf-8');

  for (const route of routes) {
    const routeDir = path.join(distDir, route.dir);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    let routeHtml = baseHtml;

    // Replace title
    routeHtml = routeHtml.replace(
      /<title>.*?<\/title>/i,
      `<title>${route.title}</title>`
    );

    // Replace meta description
    routeHtml = routeHtml.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/i,
      `<meta name="description" content="${route.description}" />`
    );

    // Replace canonical link
    routeHtml = routeHtml.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/i,
      `<link rel="canonical" href="${route.canonical}" />`
    );

    // Replace Open Graph title, description, url
    routeHtml = routeHtml.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:title" content="${route.title}" />`
    );
    routeHtml = routeHtml.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:description" content="${route.description}" />`
    );
    routeHtml = routeHtml.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/i,
      `<meta property="og:url" content="${route.canonical}" />`
    );

    // Replace Twitter title and description
    routeHtml = routeHtml.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:title" content="${route.title}" />`
    );
    routeHtml = routeHtml.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/i,
      `<meta name="twitter:description" content="${route.description}" />`
    );

    const outPath = path.join(routeDir, 'index.html');
    fs.writeFileSync(outPath, routeHtml, 'utf-8');
    console.log(`Generated route HTML: ${route.dir}/index.html`);
  }
}

generateRouteHtml();
