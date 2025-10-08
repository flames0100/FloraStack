
'use client';
import { useState } from 'react';
import Link from 'next/link';
export default function LoginPage(){ const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); function submit(e){ e.preventDefault(); alert('Placeholder: integrate auth'); } return (<section className="container py-12 max-w-md"><h1 className="text-2xl font-bold mb-4">Sign in</h1><form onSubmit={submit} className="bg-white dark:bg-slate-900 border p-6 rounded-lg space-y-4"><input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-3 border rounded" /><input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" className="w-full p-3 border rounded" /><button className="w-full px-4 py-2 bg-flora-500 text-white rounded-lg">Sign in</button></form><div className="mt-4 text-sm">Don't have an account? <Link href="/register" className="text-flora-600">Register</Link></div></section>); }
