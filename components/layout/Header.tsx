'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/store/cart';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations('nav');
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const itemsCount = useCart((s) => s.items.length);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const currentLocale = ['fa', 'en', 'ar'].includes(locale) ? locale : 'en';
  const links = [
    { href: `/${currentLocale}`, label: t('home') },
    { href: `/${currentLocale}/products`, label: t('products') },
    { href: `/${currentLocale}/wholesale`, label: t('wholesale') },
    { href: `/${currentLocale}/markets`, label: t('markets') },
    { href: `/${currentLocale}/about`, label: t('about') },
    { href: `/${currentLocale}/contact`, label: t('contact') },
  ];

  const langSwitch = (l: string) => `/${l}${pathname.replace(/^\/(fa|en|ar)/, '')}`;

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'bg-ivory/95 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-20">
        <Link href={`/${currentLocale}`} className="text-2xl font-bold text-navy tracking-tight">
          IRAN <span className="text-gold">SELECT</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
                  className="text-sm font-medium text-ink hover:text-gold-dark transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex gap-1 text-xs">
            {(['en', 'fa', 'ar'] as const).map((l) => (
              <Link key={l} href={langSwitch(l)}
                    className={`px-2 py-1 rounded ${locale === l ? 'bg-navy text-ivory' : 'text-muted hover:text-navy'}`}>
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
          <Link href={`/${currentLocale}/cart`} className="relative p-2 text-navy hover:text-gold-dark">
            <ShoppingCart size={20} />
            {itemsCount > 0 && (
              <span className="absolute -top-1 -end-1 w-5 h-5 bg-gold text-white text-xs rounded-full flex items-center justify-center">
                {itemsCount}
              </span>
            )}
          </Link>
          <a href={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER.replace(/\D/g, '')}` : `/${currentLocale}/contact`} target="_blank" rel="noopener noreferrer"
             className="px-5 py-2.5 bg-navy text-ivory rounded-full text-sm font-medium hover:bg-navy-dark transition">
            WhatsApp
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-navy">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-ivory border-t border-navy/10 px-6 py-6 space-y-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  className="block text-ink font-medium">{l.label}</Link>
          ))}
          <div className="flex gap-2 pt-4 border-t border-navy/10">
            {(['en', 'fa', 'ar'] as const).map((l) => (
              <Link key={l} href={langSwitch(l)}
                    className={`px-3 py-1.5 rounded text-sm ${locale === l ? 'bg-navy text-ivory' : 'bg-navy/5 text-navy'}`}>
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
