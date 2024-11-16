import Link from "next/link";
import "@/app/globals.css";

export default function HomePage() {
  return (
      <main className="flex-grow bg-gray-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-center mb-6">
            Projetos de Sustentabilidade Simples
          </h1>
          <p className="text-lg text-center text-gray-600 mb-8">
            Explore ideias criativas e práticas que ajudam a construir um futuro mais sustentável.
          </p>
          <div className="flex justify-center">
            <Link href="/pagina/galeria" className="bg-green-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-700 transition">
              Explorar Galeria
            </Link>
          </div>
        </div>
      </main>
  );
}
