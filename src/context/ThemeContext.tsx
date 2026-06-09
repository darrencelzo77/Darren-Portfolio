import React, { createContext, useState, useEffect, useContext } from 'react';

type Theme = 'light' | 'dark';
export type PaletteName = 'default' | 'ember' | 'ocean' | 'neon' | 'sage';

export interface PaletteOption {
  name: PaletteName;
  label: string;
  brandSwatch: string;
  accentSwatch: string;
}

export const PALETTES: PaletteOption[] = [
  { name: 'default', label: 'Classic', brandSwatch: '#4a4e69', accentSwatch: '#c9ada7' },
  { name: 'ember', label: 'Midnight Ember', brandSwatch: '#5c4a3a', accentSwatch: '#e07a5f' },
  { name: 'ocean', label: 'Ocean Depth', brandSwatch: '#1d6b7a', accentSwatch: '#48c9b0' },
  { name: 'neon', label: 'Neon Circuit', brandSwatch: '#6c3ec1', accentSwatch: '#00e5a0' },
  { name: 'sage', label: 'Sage & Stone', brandSwatch: '#4a6741', accentSwatch: '#d4a843' },
];

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  palette: PaletteName;
  setPalette: (p: PaletteName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) return savedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [palette, setPaletteState] = useState<PaletteName>(() => {
    const saved = localStorage.getItem('palette') as PaletteName | null;
    return saved && PALETTES.some(p => p.name === saved) ? saved : 'default';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette);
    localStorage.setItem('palette', palette);
  }, [palette]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const setPalette = (p: PaletteName) => {
    setPaletteState(p);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, palette, setPalette }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};