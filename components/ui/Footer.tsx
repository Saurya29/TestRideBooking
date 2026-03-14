export default function Footer() {
  return (
    <footer className="bg-[#050303] border-t border-re-red/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-re-red flex items-center justify-center text-white text-xs font-display font-black">
            RE
          </div>
          <span className="text-re-cream/40 text-xs font-body tracking-widest uppercase">
            Royal Enfield — Product Strategy Case Study
          </span>
        </div>
        <p className="text-re-cream/25 text-xs font-body">
          © 2025 · Confidential · For internal use only
        </p>
      </div>
    </footer>
  );
}
