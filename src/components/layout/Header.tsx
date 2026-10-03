'use client';
// A11y reference: lang="pt-BR"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/data/navigation';
import { Button } from '@/components/common/Button';
import { IconMenu, IconX, IconArrowRight } from '@/components/icons';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleMobileMenuKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMobileMenu();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070B]/85 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#09CCA2]/40 rounded-lg p-1"
            aria-label="MALEMI Início"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#09CCA2] to-[#1D4ED8] p-[1.5px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#05070B] rounded-[6.5px] flex items-center justify-center">
                <span className="font-extrabold text-sm tracking-wider text-white">
                  M<span className="text-[#09CCA2]">.</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-widest text-white leading-none">
                MALEMI
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-medium mt-0.5">
                Tech &amp; Data
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação Principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#09CCA2] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="primary"
              size="sm"
              href="#contato"
              icon={<IconArrowRight size={16} />}
            >
              Fale conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={toggleMobileMenu}
              onKeyDown={handleMobileMenuKeyDown}
              className="p-2 text-slate-300 hover:text-white rounded-lg border border-white/10 bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#09CCA2]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <IconX size={22} /> : <IconMenu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-4 pb-6 px-4 bg-[#0A0F1A]/95 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-3" aria-label="Navegação Mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-slate-200 hover:text-[#09CCA2] rounded-lg hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t border-white/10">
              <Button
                variant="primary"
                size="md"
                href="#contato"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
                icon={<IconArrowRight size={16} />}
              >
                Fale conosco
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
