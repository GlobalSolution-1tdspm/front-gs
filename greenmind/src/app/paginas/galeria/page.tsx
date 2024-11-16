"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function Galeria() {
  const [categoria, setCategoria] = useState('todos');

  const projetos = [
    {
      id: 1,
      nome: 'Coleta de Água',
      descricao: 'Sistema simples para coleta de água da chuva.',
      categoria: 'agua',
      imagem: '/img/cicero.jpeg',
    },
    {
      id: 2,
      nome: 'Horta Vertical',
      descricao: 'Horta para cultivo em pequenos espaços urbanos.',
      categoria: 'horta',
      imagem: '/img/isabella.jpeg',
    },
    {
      id: 3,
      nome: 'Economia de Energia',
      descricao: 'Sistemas de baixo custo para economizar energia elétrica.',
      categoria: 'energia',
      imagem: '/img/eduardo-m.jpeg',
    },
  ];

  const projetosFiltrados = projetos.filter(projeto => categoria === 'todos' || projeto.categoria === categoria);

  return (
    <div className="galeria-container py-12 px-6">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Galeria de Projetos de Sustentabilidade</h1>
        <nav className="flex justify-center items-center space-x-6">
          <label htmlFor="categorias" className="text-lg text-gray-700">Filtrar por Categoria:</label>
          <select
            id="categorias"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="p-3 bg-white border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200"
          >
            <option value="todos">Todos</option>
            <option value="energia">Redução de Energia</option>
            <option value="agua">Água</option>
            <option value="horta">Horta Urbana</option>
          </select>
        </nav>
      </header>

      <section className="flex justify-center items-center flex-wrap gap-6">
        {projetosFiltrados.length > 0 ? (
          projetosFiltrados.map((projeto) => (
            <div key={projeto.id} className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 max-w-xs mx-4">
              <Image
                src={projeto.imagem}
                alt={projeto.nome}
                width={300}
                height={200}
                layout="intrinsic"
                className="object-cover w-full h-48"
              />
              <div className="card-info p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{projeto.nome}</h3>
                <p className="text-gray-600 text-sm mb-4">{projeto.descricao}</p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-all duration-300 text-sm">Ver mais</button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-lg">Nenhum projeto encontrado para esta categoria.</p>
        )}
      </section>

      <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center hidden" id="modal">
        <div className="modal-content bg-white rounded-lg p-8">
          <span className="close text-2xl absolute top-4 right-4 cursor-pointer" id="close-modal">&times;</span>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Detalhes do Projeto</h2>
          <Image
            src="/images/projeto1-detalhe.jpg"
            alt="Detalhe do Projeto"
            width={500}
            height={300}
            layout="intrinsic"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600">Descrição completa do projeto.</p>
        </div>
      </div>
    </div>
  );
}
