
export default function FeaturesPage() {
  const features = [
    { title: 'AI Assistant', desc: 'Natural language insights, summarization, and content generation.' },
    { title: 'Automations', desc: 'Drag-and-drop builders for repeatable workflows.' },
    { title: 'Integrations', desc: 'Connect CRMs, email providers, and data sources.' },
    { title: 'Marketplace', desc: 'Install templates and modules to extend FloraStack.' }
  ];
  return (<section className="container py-20"><h2 className="text-3xl font-bold">Features</h2><div className="mt-8 grid md:grid-cols-2 gap-6">{features.map(f => <div key={f.title} className="p-6 border rounded-xl card"><div className="text-lg font-semibold">{f.title}</div><div className="mt-2 text-slate-600 dark:text-slate-400">{f.desc}</div></div>)}</div></section>);
}
