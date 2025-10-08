
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [dark, setDark] = useState(false);
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); }, [dark]);

  return (
    <section className="container py-20">
      <div className="flex justify-end mb-6">
        <button onClick={() => setDark(d => !d)} className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800">Toggle Theme</button>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-5xl font-extrabold leading-tight">
            Grow smarter with <span className="text-flora-600">AI-powered workflows</span>
          </motion.h1>
          <p className="mt-6 text-lg text-slate-600 max-w-prose">FloraStack combines automation, analytics, and a marketplace of AI modules so your team can focus on growth — not repetitive work.</p>
          <div className="mt-8 flex gap-4">
            <Link href="/pricing" className="px-6 py-3 bg-flora-500 text-white rounded-lg shadow hover:bg-flora-600">Get Started</Link>
            <Link href="/features" className="px-6 py-3 border rounded-lg">See Features</Link>
          </div>
        </div>
        <div>
          <div className="card p-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-flora-500 text-white flex items-center justify-center font-semibold">AI</div>
                <div>
                  <div className="font-semibold">AI Assistant</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400">Summarize sales, draft outreach, or generate reports instantly.</div>
                </div>
              </div>
              <div className="mt-4">
                <div className="text-xs text-muted-400">Try prompt</div>
                <div className="mt-2 p-3 bg-slate-50 dark:bg-slate-800 rounded">"Summarize opportunities for next quarter and recommend next actions."</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="mt-16">
        <h3 className="text-2xl font-bold">Why FloraStack?</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl card"><div className="text-lg font-semibold">Automate</div><div className="mt-2 text-slate-600 dark:text-slate-400">Turn repetitive processes into automation flows with intuitive builders.</div></div>
          <div className="p-6 border rounded-xl card"><div className="text-lg font-semibold">Insights</div><div className="mt-2 text-slate-600 dark:text-slate-400">AI-generated reports that surface what matters from your data.</div></div>
          <div className="p-6 border rounded-xl card"><div className="text-lg font-semibold">Marketplace</div><div className="mt-2 text-slate-600 dark:text-slate-400">Buy and install AI modules, prompts, and templates built by experts.</div></div>
        </div>
      </section>
    </section>
  );
}
