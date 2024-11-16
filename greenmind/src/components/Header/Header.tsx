import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image 
            src="/img/logo-icon.png" 
            alt="GreenMind Logo" 
            width={48}  
            height={48} 
            className="w-auto h-12"
          />
          <h1 className="text-3xl font-semibold text-gray-900 tracking-wide hover:text-green-600 transition duration-300 ease-in-out">
            <Link href="/">GreenMind</Link>
          </h1>
        </div>
        <nav className="space-x-6 flex items-center">
          <Link href="/" className="text-lg font-medium text-gray-700 hover:text-green-600 transition duration-300 ease-in-out">
            Home
          </Link>
          <Link href="/pagina/galeria" className="text-lg font-medium text-gray-700 hover:text-green-600 transition duration-300 ease-in-out">
            Galeria
          </Link>
        </nav>
      </div>
    </header>
  );
}
