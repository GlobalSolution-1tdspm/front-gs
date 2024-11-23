"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {Projeto} from "@/app/types";


export default function Galeria() {
    const [categoria, setCategoria] = useState('todos');
    const [projetos, setProjetos] = useState<Projeto[]>([]);

    useEffect(() => {
        async function fetchProjetos() {
            try {
                const response = await fetch(`http://localhost:8080/projetos/categoria/${categoria === 'todos' ? '' : categoria}`);
                const data = await response.json();
                setProjetos(data);
            } catch (error) {
                console.error('Erro ao buscar projetos:', error);
            }
        }
        fetchProjetos();
    }, [categoria]);

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
                        onChange={(e) => setCategoria(e.target.value )}
                        className="p-3 bg-white border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-green-500 focus:outline-none transition duration-200"
                    >
                        <option value="todos">Todos</option>
                        <option value="Energia">Energia</option>
                        <option value="Água">Água</option>
                        <option value="Hortas">Horta Urbana</option>
                        <option value="Alimentação Sustentável">Alimentação Sustentável</option>
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

            <section className="flex justify-center items-center flex-wrap gap-6">
                {projetosFiltrados.length > 0 ? (
                    projetosFiltrados.map((projeto) => (
                        <div key={projeto.id} className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 max-w-xs mx-4">
                            <Image
                                src={projeto.imagemUrl}
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
        </div>
    );
}