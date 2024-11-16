import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-lg border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo e Título */}
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/img/logo-icon.png"
              alt="GreenMind Logo"
              width={48}
              height={48}
              className="w-auto h-12"
            />
          </Link>
          <h1 className="text-2xl font-semibold text-gray-800 tracking-tight hover:text-green-600 transition duration-200 ease-in-out">
            <Link href="/">GreenMind</Link>
          </h1>
        </div>

        {/* Navegação */}
        <nav className="flex space-x-6 items-center">
          <Link
            href="/paginas/galeria"
            className="text-lg font-medium text-gray-600 hover:text-green-600 transition duration-200 ease-in-out"
          >
            Galeria
          </Link>
        </nav>
      </div>
    </header>
  );
}
