import { Bot } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const BottomBanner = () => {
  return (
    <div className="flex items-center justify-center space-y-4 w-full sm:gap-5 flex-col sm:flex-row">
      <Image
        src="https://framerusercontent.com/images/vk3uhYRDKiW5NcO75br3tWCegtc.jpg"
        alt="Inteligência Artificial"
        aria-label="Imagem de uma pessoa falando com o celular na mão"
        width={0}
        height={0}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        className="rounded-lg  sm:flex hidden transform -scale-x-100 w-full max-w-[30rem]"
      />
      <div className="flex flex-col items-center w-full text-center gap-3">
        <h1 className="text-gray-600 dark:bg-gradient-to-l from-violet-300 to-pink-600 dark:text-transparent dark:bg-clip-text text-4xl sm:font-bold text-wrap">
          Em um mundo de IA, ser lento não é uma opção.
        </h1>
        <Link
          href="/chat"
          className="flex items-center justify-center space-x-2 dark:bg-white dark:text-black rounded-full px-4 py-2 hover:opacity-90 shadow-md gap-2 mt-2 bg-pink-500 text-white"
          aria-label="Link para falar com chatbot"
          data-testid="chatbot-link"
        >
          Falar com chatbot <Bot />
        </Link>
      </div>
    </div>
  );
};

export default BottomBanner;
