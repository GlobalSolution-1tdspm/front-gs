import Link from "next/link";
import Image from "next/image";
import { FaLeaf, FaLightbulb, FaUsers } from "react-icons/fa"; 
import { FaLinkedin as Linkedin } from "react-icons/fa";
import { FaGithub as Github } from "react-icons/fa";
import { FaInstagram as Instagram } from "react-icons/fa";

export default function Home() {
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
              GreenMind
            </h1>
            <p className="text-xl text-white md:text-2xl max-w-3xl mx-auto drop-shadow-lg">
              Explore ideias criativas e práticas que ajudam a construir um futuro mais sustentável.
            </p>
            <Link
              href="/paginas/galeria"
              className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 ease-in-out"
            >
              Saiba Mais
            </Link>
          </div>
        </div>
      </main>

      <section id="sobre-nos" className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-semibold text-gray-800 mb-8">Sobre Nós</h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-10">
            O GreenMind é um projeto dedicado a criar soluções sustentáveis que promovem práticas ecológicas simples, mas eficazes. Nosso objetivo é fornecer ideias inovadoras e acessíveis para aqueles que desejam fazer a diferença no mundo. Acreditamos que pequenas ações podem ter um grande impacto na preservação do meio ambiente e na construção de um futuro mais verde e consciente.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-600 text-white p-6 rounded-full mb-4">
                <FaLeaf className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Práticas Sustentáveis</h3>
              <p className="text-gray-600 mt-2">
                Implementação de ideias simples que impactam positivamente o meio ambiente.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-600 text-white p-6 rounded-full mb-4">
                <FaLightbulb className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Inovação</h3>
              <p className="text-gray-600 mt-2">
                Soluções criativas para um futuro mais sustentável e consciente.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-600 text-white p-6 rounded-full mb-4">
                <FaUsers className="text-4xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Comunidade</h3>
              <p className="text-gray-600 mt-2">
                Engajamento de pessoas em prol da sustentabilidade e do meio ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="nosso-time" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Nosso Time</h2>
          <p className="text-lg text-gray-600 mb-16">
            Conheça as pessoas apaixonadas por fazer a diferença no mundo e tornar o GreenMind uma realidade.
          </p>

          <div className="grid md:grid-cols-3 gap-16 justify-center">
            <div className="team-member bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <Image src="/img/isabella.jpeg" alt="foto-isa" width={150} height={150} className="team-member-image rounded-full mx-auto mb-6 border-4 border-green-500" />
              <b className="text-xl font-semibold text-gray-800">Isabella de Fátima Medeiros</b>
              <span className="block text-gray-500 mt-2">RM 554725</span>
              <span className="block text-gray-500 mt-1">1TDSPM</span>
              <div className="social-icons flex justify-center gap-6 mt-6">
                <Link href="https://github.com/IsabellaMedeiros1" target="_blank" rel="noopener noreferrer">
                  <Github className="text-gray-600 hover:text-green-600 transition-colors duration-200" />
                </Link>
                <Link href="https://www.instagram.com/isa.bll4x/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="text-gray-600 hover:text-green-600 transition-colors duration-200" />
                </Link>
                <Link href="https://www.linkedin.com/in/isabella-medeiros-304769297" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="text-gray-600 hover:text-green-600 transition-colors duration-200" />
                </Link>
              </div>
            </div>
            <div className="team-member bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <Image src="/img/eduardo-m.jpeg" alt="foto-dudao" width={150} height={150} className="team-member-image rounded-full mx-auto mb-6 border-4 border-green-500" />
              <b className="text-xl font-semibold text-gray-800">Eduardo Miguel Forato Monteiro</b>
              <span className="block text-gray-500 mt-2">RM 555871</span>
              <span className="block text-gray-500 mt-1">1TDSPM</span>
              <div className="social-icons flex justify-center gap-6 mt-6">
                <Link href="https://github.com/EduardoMiguelFM" target="_blank" rel="noopener noreferrer">
                  <Github className="text-gray-600 hover:text-green-600 transition-colors duration-200" />
                </Link>
                <Link href="https://www.instagram.com/dudao_miguelfm/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="text-gray-600 hover:text-green-600 transition-colors duration-200" />
                </Link>
                <Link href="https://www.linkedin.com/in/eduardo-miguel-forato-monteiro-10b9822b7" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="text-gray-600 hover:text-green-600 transition-colors duration-200" />
                </Link>
              </div>
            </div>
            <div className="team-member bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              <Image src="/img/cicero.jpeg" alt="foto-cicero" width={150} height={150} className="team-member-image rounded-full mx-auto mb-6 border-4 border-green-500" />
              <b className="text-xl font-semibold text-gray-800">Cicero Gabriel Oliveira Serafim</b>
              <span className="block text-gray-500 mt-2">RM 556996</span>
              <span className="block text-gray-500 mt-1">1TDSPM</span>
              <div className="social-icons flex justify-center gap-6 mt-6">
                <Link href="https://github.com/ciceroserafim" target="_blank" rel="noopener noreferrer">
                  <Github className="text-gray-600 hover:text-green-600 transition-colors duration-200" />
                </Link>
                <Link href="https://www.instagram.com/cicero__serafim/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="text-gray-600 hover:text-green-600 transition-colors duration-200" />
                </Link>
                <Link href="https://www.linkedin.com/in/c%C3%ADcero-gabriel-oliveira-serafim-953b0b20b/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="text-gray-600 hover:text-green-600 transition-colors duration-200" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
