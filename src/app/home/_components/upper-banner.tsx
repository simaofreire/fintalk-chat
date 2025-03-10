import Image from 'next/image';

const UpperBanner = () => {
  return (
    <div className="flex items-center justify-center space-y-4 w-full sm:gap-5 flex-col sm:flex-row">
      <h1 className="text-gray-600 dark:bg-gradient-to-l to-violet-300 from-pink-600 dark:text-transparent dark:bg-clip-text text-4xl sm:font-bold">
        Nº 1 em IA <br />
        Conversacional
      </h1>
      <Image
        src="https://framerusercontent.com/images/xnrZK21qFHWyi49k93PXkPLfw.png"
        alt="Inteligência Artificial"
        aria-label="Imagem de uma pessoa olhando o celular na mão"
        width={500}
        height={500}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        className="rounded-lg sm:flex w-full max-w-[30rem]"
      />
    </div>
  );
};

export default UpperBanner;
