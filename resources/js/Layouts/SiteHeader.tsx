import { Link, usePage } from '@inertiajs/react';
import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import type { Site } from '@/types';

const navLinks: { href: string; label: string; match: (url: string) => boolean }[] = [
  { href: '/', label: 'Home', match: (url) => url === '/' },
  { href: '/about', label: 'About', match: (url) => url.startsWith('/about') },
  { href: '/services', label: 'Services', match: (url) => url.startsWith('/services') },
  { href: '/testimonials', label: 'Testimonials', match: (url) => url.startsWith('/testimonials') },
  { href: '/team', label: 'Team', match: (url) => url.startsWith('/team') },
  { href: '/faqs', label: 'FAQs', match: (url) => url.startsWith('/faqs') },
  { href: '/contact', label: 'Contact', match: (url) => url.startsWith('/contact') },
  { href: '/blog', label: 'Blogs', match: (url) => url.startsWith('/blog') },
];

export function SiteHeader() {
  const page = usePage<{ site: Site | null }>();
  const { site } = page.props;
  const url = page.url;
  const phone = site?.phone ?? null;
  const siteName = site?.site_name ?? 'Doconnect';
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [url]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const telHref = phone ? `tel:${phone.replace(/\s/g, '')}` : null;

  return (
    <header className="site-header">
      <div className="container site-header-container">
        <Link href="/" className="site-header-logo">
          {siteName}
        </Link>

        <nav id="site-nav" className={`site-header-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={l.match(url) ? 'site-header-link is-active' : 'site-header-link'}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="site-header-actions">
          {telHref ? (
            <a href={telHref} className="site-header-phone">
              <Phone size={18} strokeWidth={2.25} aria-hidden />
              <span className="site-header-phone-full">{phone}</span>
              <span className="site-header-phone-short">Call</span>
            </a>
          ) : null}
          <button
            type="button"
            className="site-header-menu-btn"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        </div>

        {menuOpen && telHref ? (
          <a href={telHref} className="site-header-mobile-call" onClick={() => setMenuOpen(false)}>
            <Phone size={20} strokeWidth={2} aria-hidden />
            Call {phone}
          </a>
        ) : null}
      </div>

      {menuOpen ? (
        <button type="button" className="site-header-backdrop" aria-label="Close menu" onClick={() => setMenuOpen(false)} />
      ) : null}
    </header>
  );
}
