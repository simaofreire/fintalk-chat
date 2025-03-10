'use client';
import { useCallback, useEffect, useState } from 'react';

export default function SwitchThemeBtn() {
  const [theme, setTheme] = useState('dark');

  const toggleSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
  };

  const checkLocalTheme = useCallback(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme);
    }
    if (theme === 'light') {
      document.querySelector('html')!.classList.remove('dark');
      return;
    }
    document.querySelector('html')!.classList.add('dark');
  }, [theme]);

  useEffect(() => {
    checkLocalTheme();
  }, [checkLocalTheme]);

  return (
    <button
      onClick={toggleSwitch}
      className={`relative inline-block w-8 align-middle select-none transition duration-300 ease-in border-solid rounded-full border-2 border-zinc-500 ${
        theme === 'light' ? 'bg-zinc-700' : 'bg-white'
      }`}
    >
      <span
        className={`block h-3 w-3 rounded-full shadow-inner transform transition ${
          theme === 'light'
            ? 'translate-x-4 bg-white'
            : 'translate-x-0 bg-zinc-700'
        }`}
      />
    </button>
  );
}
