export default function Footer() {
  return (
    <footer className="bg-masters-green text-masters-white py-8 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-serif text-masters-gold text-lg font-bold">
          Odel Masters
        </p>
        <p className="text-sm mt-2 text-masters-white/80">
          Arendal og Omegn Golfklubb
        </p>
        <p className="text-xs mt-4 text-masters-white/60">
          &copy; {new Date().getFullYear()} Odel Masters. Alle rettigheter reservert.
        </p>
      </div>
    </footer>
  );
}
