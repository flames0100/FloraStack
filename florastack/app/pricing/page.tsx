
export default function Pricing() {
  const plans = [
    { name: 'Starter', price: '$9', freq: '/mo', features: ['100 AI queries', 'Basic automations', 'Email support'] },
    { name: 'Pro', price: '$49', freq: '/mo', features: ['5k AI queries', 'Advanced automations', 'Priority support'] },
    { name: 'Enterprise', price: 'Contact', freq: '', features: ['SAML', 'Custom SLAs', 'Dedicated CSM'] }
  ];
  return (<section className="container py-20"><h2 className="text-3xl font-bold">Pricing</h2><div className="mt-8 grid md:grid-cols-3 gap-6">{plans.map(p => <div key={p.name} className="p-6 border rounded-xl card shadow"><div className="text-lg font-semibold">{p.name}</div><div className="mt-4 text-3xl font-bold">{p.price} <span className="text-base font-medium text-slate-500 dark:text-slate-400">{p.freq}</span></div><ul className="mt-4 text-slate-600 dark:text-slate-400 space-y-2">{p.features.map(f => <li key={f}>• {f}</li>)}</ul><div className="mt-6"><button className="w-full px-4 py-2 bg-flora-500 text-white rounded-lg">Choose</button></div></div>)}</div></section>);
}
