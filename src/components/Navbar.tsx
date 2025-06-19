import { Facebook, Linkedin, Menu, Moon, Sun, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/nerradetsabnaitsabes.1919/',
      icon: <Facebook size={20} />,
    },
    {
      name: 'LinkedIn',
      href: 'www.linkedin.com/in/darren-celzo-acuña-a39082296', // replace with your LinkedIn URL
      icon: <Linkedin size={20} />,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
          ? 'bg-[#ffffff] dark:bg-[#4a4e69] shadow-md py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-[#4a4e69] dark:text-[#f2e9e4]">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="font-medium text-[#4a4e69] dark:text-[#f2e9e4] hover:text-[#3e3b50] dark:hover:text-[#f2e9e4]/80 transition-colors"
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
                className="text-[#4a4e69]/70 dark:text-[#f2e9e4]/70 hover:text-[#4a4e69] dark:hover:text-[#f2e9e4] transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[#f2e9e4] dark:hover:bg-[#3e3b50] transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-[#f2e9e4] dark:hover:bg-[#3e3b50] transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#4a4e69] dark:text-[#f2e9e4]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#ffffff] dark:bg-[#4a4e69] shadow-lg md:hidden">
            <nav className="container-custom py-6">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="block font-medium text-[#4a4e69] dark:text-[#f2e9e4] hover:text-[#3e3b50] dark:hover:text-[#f2e9e4]/80 transition-colors"
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
                    className="text-[#4a4e69]/70 dark:text-[#f2e9e4]/70 hover:text-[#4a4e69] dark:hover:text-[#f2e9e4] transition-colors"
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
