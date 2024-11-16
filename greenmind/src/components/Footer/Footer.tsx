import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-8 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="mb-4">
          <p className="text-lg font-medium text-gray-600">
            &copy; 2024 <span className="font-semibold text-green-600">GreenMind</span>. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500">
            Feito com <span className="text-red-500">❤️</span> para um futuro mais verde.
          </p>
        </div>

        <div className="flex justify-center mb-4">
          <Link
            href="https://github.com/seu-usuario/seu-repositorio"
            target="_blank"
            className="text-gray-800 hover:text-green-600 transition-all duration-300 ease-in-out mx-4"
          >
            <FaGithub className="text-3xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
