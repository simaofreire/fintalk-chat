'use client'

import Image from 'next/image';
import Link from 'next/link';
import SwitchThemeBtn from './switch-theme-button';

const Header = () => {
  return (
    <header className="w-full h-[6rem] flex items-center justify-between px-8 dark:bg-[#101C33] border-b-2 border-gray-200 dark:border-gray-800">
      <Link href="/">
        <Image
          src="https://framerusercontent.com/images/l3A03uRyhXFQLXcpoKH8a2guNJ8.svg"
          alt="Fintalk logo"
          width={100}
          height={100}
          className='filter invert dark:invert-0'
        />
      </Link>
      <SwitchThemeBtn />
    </header>
  );
};

export default Header;
