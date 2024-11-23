'use client';

import { useState, useEffect } from 'react';
import { Categoria } from '@/app/types';
import { useRouter } from 'next/navigation';

export default function Cadastro() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nomeProj: '',
    descricao: '',
    detalhes: '',
    categoriaId: '', 
    nomeAutor: '',
    emailAutor: '',
  });

  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchCategorias() {
      try {
        const response = await fetch('http://localhost:8080/categorias');
        const data: Categoria[] = await response.json();
        setCategorias(data);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
        setMessage('Erro ao carregar categorias.');
      }
    }
    fetchCategorias();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/projetos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Projeto cadastrado com sucesso!');
        setFormData({
          nomeProj: '',
          descricao: '',
          detalhes: '',
          categoriaId: '',
          nomeAutor: '',
          emailAutor: '',
        });

        router.push('/paginas/galeria');
      } else {
        setMessage(`Erro ao cadastrar o projeto. Status: ${response.status}`);
        const errorText = await response.text();
        console.error('Erro na resposta da API:', errorText);
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      setMessage('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#41A04C]/[0.1] p-6">
      <div className="w-full max-w-xl p-10 bg-[#41A04C]/[0.37] rounded-3xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Cadastre seu Projeto</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nomeAutor"
            placeholder="Digite seu Nome Completo"
            value={formData.nomeAutor}
            onChange={handleInputChange}
            className="w-full px-4 py-3 mb-4 bg-white border-2 border-gray-200 rounded-full text-lg focus:outline-none focus:border-[#41A04C]"
            required
          />
          <input
            type="email"
            name="emailAutor"
            placeholder="Digite seu E-mail"
            value={formData.emailAutor}
            onChange={handleInputChange}
            className="w-full px-4 py-3 mb-4 bg-white border-2 border-gray-200 rounded-full text-lg focus:outline-none focus:border-[#41A04C]"
            required
          />
          <input
            type="text"
            name="nomeProj"
            placeholder="Digite o título do Projeto"
            value={formData.nomeProj}
            onChange={handleInputChange}
            className="w-full px-4 py-3 mb-4 bg-white border-2 border-gray-200 rounded-full text-lg focus:outline-none focus:border-[#41A04C]"
            required
          />
          <div className="mb-4">
            <select
              id="categoriaId"
              name="categoriaId"
              value={formData.categoriaId}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-full text-lg focus:outline-none focus:border-[#41A04C] text-gray-500"
              required
            >
              <option value="">Selecione uma categoria</option>
              {categorias.map((categoria) => (
                <option key={categoria.idCat} value={categoria.nomeCat}>
                  {categoria.nomeCat}
                </option>
              ))}
            </select>
          </div>
          <textarea
            name="descricao"
            placeholder="Faça uma descrição sobre o projeto"
            value={formData.descricao}
            onChange={handleInputChange}
            className="w-full px-4 py-3 mb-4 bg-white border-2 border-gray-200 rounded-lg text-lg focus:outline-none focus:border-[#41A04C]"
            rows={4}
            required
          />
          <textarea
            name="detalhes"
            placeholder="Descreva seu projeto"
            value={formData.detalhes}
            onChange={handleInputChange}
            className="w-full px-4 py-3 mb-6 bg-white border-2 border-gray-200 rounded-lg text-lg focus:outline-none focus:border-[#41A04C]"
            rows={3}
            required
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 ease-in-out"
            >
              Cadastrar
            </button>
          </div>
        </form>
        {message && <p className={`mt-4 text-center ${message.includes('erro') ? 'text-red-500' : 'text-white'}`}>{message}</p>}
      </div>
    </div>
  );
}
