"use client";
import React, { useState, useEffect } from "react";
import { Projeto } from "@/app/types";

export default function Galeria() {
  const [categoria, setCategoria] = useState("todos");
  const [projetos, setProjetos] = useState<Projeto[]>([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(null);

  useEffect(() => {
    async function fetchProjetos() {
      try {
        const url = `http://localhost:8080/projetos${
          categoria === "todos" ? "" : "/categoria/" + categoria
        }`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Erro ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setProjetos(data);
        } else {
          console.error("Dados retornados não são um array:", data);
        }
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      }
    }
    fetchProjetos();
  }, [categoria]);

  const projetosFiltrados = projetos.filter(
    (projeto) => categoria === "todos" || projeto.categoriaId === categoria
  );

  const abrirModal = (projeto: Projeto) => {
    setProjetoSelecionado(projeto);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setProjetoSelecionado(null);
  };

  return (
    <div className="galeria-container py-12 px-4 max-w-screen-xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Galeria de Projetos de Sustentabilidade
        </h1>
        <nav className="flex justify-center items-center space-x-6">
          <label htmlFor="categorias" className="text-lg text-gray-700">
            Filtrar por Categoria:
          </label>
          <select
            id="categorias"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="p-3 bg-white border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200"
          >
            <option value="todos">Todos</option>
            <option value="Energia">Energia</option>
            <option value="Água">Água</option>
            <option value="Hortas">Horta Urbana</option>
            <option value="Alimentação Sustentável">
              Alimentação Sustentável
            </option>
            <option value="Construção">Construção</option>
            <option value="Educação">Educação</option>
            <option value="Proteção Animal">Proteção Animal</option>
            <option value="Reciclagem">Reciclagem</option>
            <option value="Resíduos">Resíduos</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Transportes">Transportes</option>
            <option value="Natureza">Natureza</option>
          </select>
        </nav>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {projetosFiltrados.length > 0 ? (
          projetosFiltrados.map((projeto) => (
            <div
              key={projeto.idProj}
              className="cardProjeto bg-white shadow-xl rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col justify-between w-full max-w-xs"
            >
              <div className="card-info p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {projeto.nomeProj}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow overflow-hidden text-ellipsis line-clamp-6">
                  {projeto.descricao}
                </p>
                <button
                  onClick={() => abrirModal(projeto)}
                  className="bg-green-600 text-white px-4 py-2 rounded-full mt-auto hover:bg-green-700 transition-all duration-300 text-sm"
                >
                  Ver mais
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-lg col-span-full">
            Nenhum projeto encontrado para esta categoria.
          </p>
        )}
      </section>

      {modalAberto && projetoSelecionado && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="modal bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {projetoSelecionado.nomeProj}
            </h2>
            <p className="text-gray-600 mb-4">{projetoSelecionado.detalhes}</p>
            <div className="flex justify-end">
              <button
                onClick={fecharModal}
                className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-all duration-300 text-sm"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
