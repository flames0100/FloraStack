/**
 * florastack-frontend.js
 * Single-file project generator for FloraStack frontend (TypeScript + Next.js App Router).
 *
 * Usage (recommended in Vercel Build Command):
 *   node florastack-frontend.js && npm install && npm run build
 *
 * This script creates a fully structured Next.js frontend in the repository root.
 */

const fs = require('fs');
const path = require('path');

function write(filePath, content) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Wrote', filePath);
}

function json(obj) {
  return JSON.stringify(obj, null, 2);
}

// package.json
write('package.json', json({
  name: "florastack-frontend",
  private: true,
  version: "0.1.0",
  scripts: {
    dev: "next dev",
    build: "next build",
    start: "next start"
  },
  dependencies: {
    next: "14.0.0",
    react: "18.2.0",
    "react-dom": "18.2.0",
    "framer-motion": "10.12.5",
    clsx: "1.2.1",
    tailwindcss: "3.5.0",
    postcss: "8.4.24",
    autoprefixer: "10.4.14",
    "@heroicons/react": "2.0.18"
  },
  devDependencies: {
    typescript: "5.2.2"
  }
}));

// tsconfig.json
write('tsconfig.json', `{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}`);

// next.config.js
write('next.config.js', `/** @type {import('next').NextConfig} */\nmodule.exports = {\n  reactStrictMode: true,\n  experimental: { appDir: true }\n};\n`);

// postcss.config.js
write('postcss.config.js', `module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } };\n`);

// tailwind.config.js
write('tailwind.config.js', `module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        flora: {
          50: '#f6fffb',
          100: '#ecfff6',
          200: '#c8f7df',
          300: '#8feebf',
          400: '#57e49d',
          500: '#2bcf78',
          600: '#26b86a',
          700: '#1f8f51',
          800: '#176b3d',
          900: '#0f4930'
        }
      }
    }
  },
  plugins: [],
};`);

// global styles
write('app/globals.css', `@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #__next { height: 100%; }
body {
  @apply bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900 antialiased;
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}
.container { @apply max-w-6xl mx-auto px-6; }
`);

// Root layout
write('app/layout.tsx', `import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'FloraStack â Grow your business intelligently',
  description: 'FloraStack â AI-powered workflow automation, analytics, and marketplace for business growth.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
`);

// Home / Landing page
write('app/page.tsx', `import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section className="container py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl font-extrabold leading-tight">
            Grow smarter with <span className="text-flora-600">AI-powered workflows</span>
          </motion.h1>
          <p className="mt-6 text-lg text-slate-600 max-w-prose">
            FloraStack combines automation, analytics, and a marketplace of AI modules so your team can focus on growth â not repetitive work.
          </p>

          <div className="mt-8 flex gap-4">
            <Link href="/pricing" className="px-6 py-3 bg-flora-500 text-white rounded-lg shadow hover:bg-flora-600">Get Started</Link>
            <Link href="/features" className="px-6 py-3 border rounded-lg">See Features</Link>
          </div>

          <div className="mt-8 text-sm text-slate-500">Join early teams using AI to automate lead qualification, generate outreach, and predict pipeline growth.</div>
        </div>

        <div>
          <div className="bg-gradient-to-br from-white to-slate-50 border rounded-2xl p-6 shadow-xl">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-flora-500 text-white flex items-center justify-center font-semibold">AI</div>
                <div>
                  <div className="font-semibold">AI Assistant</div>
                  <div className="text-sm text-slate-500">Summarize sales, draft outreach, or generate reports instantly.</div>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-xs text-slate-400">Try prompt</div>
                <div className="mt-2 p-3 bg-slate-50 rounded">"Summarize opportunities for next quarter and recommend next actions."</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-16">
        <h3 className="text-2xl font-bold">Why FloraStack?</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <Feature title="Automate" desc="Turn repetitive processes into automation flows with intuitive builders." />
          <Feature title="Insights" desc="AI-generated reports that surface what matters from your data." />
          <Feature title="Marketplace" desc="Buy and install AI modules, prompts, and templates built by experts." />
        </div>
      </section>
    </section>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-6 border rounded-xl bg-white">
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-2 text-slate-600">{desc}</div>
    </div>
  );
}
`);

// Features page
write('app/features/page.tsx', `export default function FeaturesPage() {
  const features = [
    { title: 'AI Assistant', desc: 'Natural language insights, summarization, and content generation.' },
    { title: 'Automations', desc: 'Drag-and-drop builders for repeatable workflows.' },
    { title: 'Integrations', desc: 'Connect CRMs, email providers, and data sources.' },
    { title: 'Marketplace', desc: 'Install templates and modules to extend FloraStack.' }
  ];

  return (
    <section className="container py-20">
      <h2 className="text-3xl font-bold">Features</h2>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {features.map((f) => (
          <div key={f.title} className="p-6 border rounded-xl bg-white">
            <div className="text-lg font-semibold">{f.title}</div>
            <div className="mt-2 text-slate-600">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
`);

// Pricing
write('app/pricing/page.tsx', `export default function Pricing() {
  const plans = [
    { name: 'Starter', price: '$9', freq: '/mo', features: ['100 AI queries', 'Basic automations', 'Email support'] },
    { name: 'Pro', price: '$49', freq: '/mo', features: ['5k AI queries', 'Advanced automations', 'Priority support'] },
    { name: 'Enterprise', price: 'Contact', freq: '', features: ['SAML', 'Custom SLAs', 'Dedicated CSM'] }
  ];

  return (
    <section className="container py-20">
      <h2 className="text-3xl font-bold">Pricing</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div key={p.name} className="p-6 border rounded-xl bg-white shadow">
            <div className="text-lg font-semibold">{p.name}</div>
            <div className="mt-4 text-3xl font-bold">{p.price} <span className="text-base font-medium text-slate-500">{p.freq}</span></div>
            <ul className="mt-4 text-slate-600 space-y-2">
              {p.features.map((f) => <li key={f}>â¢ {f}</li>)}
            </ul>
            <div className="mt-6">
              <button className="w-full px-4 py-2 bg-flora-500 text-white rounded-lg">Choose</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
`);

// Marketplace / Shop
write('app/shop/page.tsx', `import Link from 'next/link';

export default function Shop() {
  const products = [
    { id: 'prompt-pack-1', title: 'Sales Outreach Pack', price: '$19' },
    { id: 'workflow-pro', title: 'Automation: Lead Nurture', price: '$49' },
    { id: 'report-templates', title: 'Weekly Insight Templates', price: '$29' }
  ];

  return (
    <section className="container py-20">
      <h2 className="text-3xl font-bold">Marketplace</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="p-6 border rounded-xl bg-white">
            <div className="font-semibold">{p.title}</div>
            <div className="mt-4 text-slate-600">A proven template to accelerate your workflows.</div>
            <div className="mt-4 text-xl font-bold">{p.price}</div>
            <div className="mt-6">
              <Link href={`/shop/${p.id}`} className="px-4 py-2 border rounded-lg">View</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
`);

// Product detail page
write('app/shop/[slug]/page.tsx', `import { notFound } from 'next/navigation';

type Props = { params: { slug: string } };

export default function ProductPage({ params }: Props) {
  const product = { id: params.slug, title: 'Sample Product', price: '$19', desc: 'A great template' };
  if (!product) notFound();

  return (
    <section className="container py-12">
      <div className="max-w-3xl bg-white border rounded-xl p-6">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <div className="mt-4 text-slate-600">{product.desc}</div>
        <div className="mt-6 text-2xl font-bold">{product.price}</div>
        <div className="mt-6">
          <button className="px-4 py-2 bg-flora-500 text-white rounded-lg">Buy</button>
        </div>
      </div>
    </section>
  );
}
`);

// Dashboard (client)
write('app/dashboard/page.tsx', `'use client';
import { useState } from 'react';

export default function Dashboard() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: string; content: string}[]>([]);

  async function send() {
    if (!input) return;
    setMessages(prev => [...prev, {role: 'user', content: input}]);
    setMessages(prev => [...prev, {role: 'assistant', content: 'Thinking...'}]);
    setInput('');
    // TODO: call /api/ai here
  }

  return (
    <section className="container py-12">
      <h1 className="text-2xl font-bold">AI Assistant</h1>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="p-4 border rounded-lg bg-white min-h-[300px]">
            {messages.map((m, i) => (
              <div key={i} className={`p-2 my-2 rounded ${m.role === 'user' ? 'bg-flora-50' : 'bg-slate-50'}`}>
                <strong>{m.role === 'user' ? 'You' : 'FloraAI'}:</strong> {m.content}
              </div>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 p-3 border rounded-lg" placeholder="Ask Flora..." />
            <button onClick={send} className="px-4 py-2 bg-flora-500 text-white rounded-lg">Send</button>
          </div>
        </div>

        <aside className="p-4 border rounded-lg bg-white">
          <h3 className="font-semibold">Insights</h3>
          <div className="mt-3 text-slate-600">Quick metrics and subscription status will appear here.</div>
        </aside>
      </div>
    </section>
  );
}
`);

// Auth placeholders (login/register)
write('app/login/page.tsx', `'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit(e) {
    e.preventDefault();
    alert('This is a placeholder. Integrate NextAuth or your auth provider.');
  }

  return (
    <section className="container py-12 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Sign in</h1>
      <form onSubmit={submit} className="bg-white border p-6 rounded-lg space-y-4">
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full p-3 border rounded" />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full p-3 border rounded" />
        <button className="w-full px-4 py-2 bg-flora-500 text-white rounded-lg">Sign in</button>
      </form>
      <div className="mt-4 text-sm">Don't have an account? <Link href="/register" className="text-flora-600">Register</Link></div>
    </section>
  );
}
`);

write('app/register/page.tsx', `'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit(e) {
    e.preventDefault();
    alert('This is a placeholder. Integrate NextAuth or your auth provider.');
  }

  return (
    <section className="container py-12 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Create account</h1>
      <form onSubmit={submit} className="bg-white border p-6 rounded-lg space-y-4">
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full p-3 border rounded" />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full p-3 border rounded" />
        <button className="w-full px-4 py-2 bg-flora-500 text-white rounded-lg">Create account</button>
      </form>
      <div className="mt-4 text-sm">Already have an account? <Link href="/login" className="text-flora-600">Sign in</Link></div>
    </section>
  );
}
`);

// API placeholder for AI
write('app/api/ai/route.ts', `import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const prompt = body.prompt || 'Hello';
    // Placeholder response - replace this with OpenAI or your AI provider integration
    const answer = \`FloraAI placeholder response for prompt: "\${prompt}"\`;
    return NextResponse.json({ answer });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
`);

// simple health route
write('app/api/health/route.ts', `import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ status: 'ok', timestamp: Date.now() });
}
`);

// Components: Nav, Footer, Logo
write('components/Nav.tsx', `'use client';
import Link from 'next/link';
import { useState } from 'react';
import { MenuIcon } from '@heroicons/react/24/outline';

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white/60 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-flora-400 to-flora-600 flex items-center justify-center text-white font-bold">FS</div>
          <div>
            <div className="font-semibold">FloraStack</div>
            <div className="text-xs text-slate-500 -mt-0.5">Grow your business intelligently</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/features" className="hover:text-flora-700">Features</Link>
          <Link href="/pricing" className="hover:text-flora-700">Pricing</Link>
          <Link href="/shop" className="hover:text-flora-700">Marketplace</Link>
          <Link href="/dashboard" className="px-4 py-2 bg-flora-500 text-white rounded-lg hover:bg-flora-600">Dashboard</Link>
        </nav>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
          <MenuIcon className="w-6 h-6 text-slate-700" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <div className="flex flex-col p-4 gap-3">
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/shop">Marketplace</Link>
            <Link href="/dashboard" className="px-3 py-2 bg-flora-500 text-white rounded-lg">Dashboard</Link>
          </div>
        </div>
      )}
    </header>
  );
}
`);

write('components/Footer.tsx', `export default function Footer() {
  return (
    <footer className="border-t bg-white/60">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-slate-600">Â© ${new Date().getFullYear()} FloraStack â Grow your business intelligently</div>
        <div className="flex items-center gap-4 text-sm">
          <a href="/terms" className="hover:text-flora-700">Terms</a>
          <a href="/privacy" className="hover:text-flora-700">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
`);

// public placeholder files
write('public/placeholder-favicon.txt', 'Replace with your favicon (add public/favicon.ico or public/favicon.svg)');
write('public/og-image.txt', 'Replace with your Open Graph image at public/og-image.png');

// README with Vercel instructions
write('README.md', `# FloraStack Frontend

This is the FloraStack frontend (Next.js App Router + TypeScript + TailwindCSS + Framer Motion).

## Quick Start (locally)
1. Run \`node florastack-frontend.js\` to generate files (if you uploaded just this script to the repo).
2. Install deps: \`npm install\`
3. Run dev: \`npm run dev\`

## Vercel (iPad-friendly) instructions
1. Create a new GitHub repo (e.g., FloraStack).
2. Add a single file named \`florastack-frontend.js\` and paste this script into it (Create new file on GitHub).
3. In Vercel, import the repository.
4. Set the Build Command to:
\`\`\`
node florastack-frontend.js && npm install && npm run build
\`\`\`
5. Deploy. Vercel will run the script, create the full project, install dependencies and build the site.

## Notes
- After deployment, the generated files live in the build environment. To edit files in GitHub, run the script locally or in a Codespace and commit the generated files back to the repo.
- Replace placeholder assets (favicon, OG image) and wire auth/AI providers as needed.`);

// Success message
console.log('\\nProject generator created. Run `node florastack-frontend.js` to generate the full frontend.');
