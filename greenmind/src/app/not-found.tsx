// pages/404.tsx
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <main className="relative flex-grow text-gray-800">
        <div className="absolute inset-0">
          <Image
            src="/img/dashboard.jpg" 
            alt="Imagem de fundo"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
        </div>

        <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6 py-36">
          <div className="flex flex-col justify-center items-center space-y-8">
            <h1 className="text-7xl font-extrabold text-white leading-tight drop-shadow-lg">
              Página Não Encontrada
            </h1>
            <p className="text-xl text-white md:text-2xl max-w-3xl mx-auto drop-shadow-lg">
              A página que você está procurando não existe. Talvez tenha sido movida ou removida.
            </p>
            <Link
              href="/"
              className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 ease-in-out"
            >
              Voltar para a Página Inicial
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
