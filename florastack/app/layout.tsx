
import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'FloraStack — Grow your business intelligently',
  description: 'FloraStack — AI-powered workflow automation, analytics, and marketplace for business growth.'
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
