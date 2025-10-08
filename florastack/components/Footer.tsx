
export default function Footer() {
  return (
    <footer className="border-t bg-white/60 dark:bg-transparent">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-slate-600 dark:text-slate-400">© 2025 FloraStack — Grow your business intelligently</div>
        <div className="flex items-center gap-4 text-sm">
          <a href="/terms" className="hover:text-flora-700">Terms</a>
          <a href="/privacy" className="hover:text-flora-700">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
