import { Github, Linkedin, Mail, Menu, Moon, Palette, Sun, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useTheme, PALETTES, PaletteName } from '../context/ThemeContext';

/* ---------- Palette Dropdown (reused in desktop & mobile) ---------- */
const PaletteDropdown: React.FC<{
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (name: PaletteName) => void;
  activePalette: PaletteName;
}> = ({ isOpen, onToggle, onSelect, activePalette }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!ref.current) return;
      // Skip if this instance is hidden (e.g. mobile dropdown on desktop)
      if (ref.current.offsetParent === null) return;
      if (!ref.current.contains(e.target as Node)) {
        onToggle();            // close
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onToggle]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={onToggle}
        className="p-2 rounded-full hover:bg-slate-200/70 dark:hover:bg-slate-700/60 transition-colors"
        aria-label="Change color theme"
      >
        <Palette size={20} />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-52 rounded-xl shadow-xl border border-[var(--border)] bg-[var(--bg-elevated)] py-2 z-50">
          {PALETTES.map((p) => (
            <button
              key={p.name}
              onClick={() => onSelect(p.name)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-[var(--border)] ${
                activePalette === p.name ? 'font-bold' : ''
              }`}
            >
              <span className="flex gap-1">
                <span className="w-3.5 h-3.5 rounded-full border border-[var(--border)]" style={{ backgroundColor: p.brandSwatch }} />
                <span className="w-3.5 h-3.5 rounded-full border border-[var(--border)]" style={{ backgroundColor: p.accentSwatch }} />
              </span>
              <span className="text-[var(--text)]">{p.label}</span>
              {activePalette === p.name && (
                <span className="ml-auto text-[var(--brand)] text-xs font-bold">Active</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/* ---------- Navbar ---------- */

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, palette, setPalette } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePaletteToggle = () => setIsPaletteOpen((v) => !v);

  const handlePaletteSelect = (name: PaletteName) => {
    setPalette(name);
    setIsPaletteOpen(false);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/darren-celzo-acuña-a39082296/',
      icon: <Linkedin size={20} />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: <Github size={20} />,
    },
    {
      name: 'Email',
      href: 'mailto:darrencelzo77@gmail.com',
      icon: <Mail size={20} />,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
          ? 'glass-panel shadow-lg py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          Darren<span className="text-[var(--brand)]"></span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-medium text-slate-800 dark:text-slate-100 hover:text-[#4a4e69] dark:hover:text-[#f2e9e4] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-[var(--brand)] transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}

            {/* Palette Dropdown */}
            <PaletteDropdown
              isOpen={isPaletteOpen}
              onToggle={handlePaletteToggle}
              onSelect={handlePaletteSelect}
              activePalette={palette}
            />

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-200/70 dark:hover:bg-slate-700/60 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>

        <div className="flex items-center space-x-4 md:hidden">
          {/* Palette Dropdown Mobile */}
          <PaletteDropdown
            isOpen={isPaletteOpen}
            onToggle={handlePaletteToggle}
            onSelect={handlePaletteSelect}
            activePalette={palette}
          />

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-200/70 dark:hover:bg-slate-700/60 transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-800 dark:text-slate-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 glass-panel shadow-xl md:hidden">
            <nav className="container-custom py-6">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="block font-medium text-slate-800 dark:text-slate-100 hover:text-[var(--brand)] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex items-center space-x-4 mt-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-300 hover:text-[var(--brand)] transition-colors"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
