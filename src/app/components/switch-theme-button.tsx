'use client';
import { useEffect, useState } from 'react';

export default function SwitchThemeBtn() {
  const [isActive, setIsActive] = useState(false);
  const [theme, setTheme] = useState('dark');

  const toggleSwitch = () => {
    setIsActive(!isActive);
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (theme === 'light') {
      document.querySelector('html')!.classList.remove('dark');
      return;
    }
    document.querySelector('html')!.classList.add('dark');
  }, [theme]);

  return (
    <button
      onClick={toggleSwitch}
      className={`relative inline-block w-8 align-middle select-none transition duration-300 ease-in border-solid rounded-full border-2 border-zinc-500 ${
        isActive ? 'bg-zinc-700' : 'bg-white'
      }`}
    >
      <span
        className={`block h-3 w-3 rounded-full shadow-inner transform transition ${
          isActive ? 'translate-x-4 bg-white' : 'translate-x-0 bg-zinc-700'
        }`}
      ></span>
    </button>
  );
}
