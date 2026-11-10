import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-navy text-ivory px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">IRAN SELECT</h2>
        <p className="text-sm opacity-70">
          Premium Iranian Products for Global Markets
        </p>
        <div className="flex gap-5 text-sm">
          <Link href="/fa">خانه</Link>
          <Link href="/en">Home</Link>
        </div>
        <p className="text-xs opacity-50">
          © {new Date().getFullYear()} IRAN SELECT
        </p>
      </div>
    </footer>
  );
}
