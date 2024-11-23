export interface Categoria {
    idCat: number;
    nomeCat: string;
  }

 export interface Projeto {
    id: number;
    nome: string;
    descricao: string;
    categoria: string;
    imagemUrl: string; 
}
  
export const imagensCategoria: Record<string, string[]> = {
    "Alimentação Sustentável": [
      "/img/alimentacao1.jpg",
      "/img/alimentacao2.jpg",
    ],
    "Construção": [
        "/img/construcao1.jpg",
        "/img/construcao2.jpg",
    ],
    "Educação": [
        "/img/educacao1.jpg",
        "/img/educacao2.jpg",
    ],
    "Energia": [
        "/img/energia1.jpg",
        "/img/energia2.jpg",
    ],
    "Hortas": [
        "/img/hortas1.jpg",
        "/img/hortas2.jpg",
    ],
    "Natureza": [
        "/img/natureza1.jpg",
        "/img/natureza2.jpg",
    ],
    "Proteção Animal": [
        "/img/animal1.jpg",
        "/img/animal2.jpg",
    ],
    "Reciclagem": [
        "/img/reciclagem1.jpg",
        "/img/reciclagem2.jpg",
    ],
    "Resíduos": [
        "/img/residuos1.jpg",
        "/img/residuos2.jpg",
    ],
    "Tecnologia": [
        "/img/tecnologia1.jpg",
        "/img/tecnologia2.jpg",
    ],
    "Transportes": [
        "/img/transporte1.jpg",
        "/img/transporte2.jpg",
    ],
    "Água": [
        "/img/agua1.jpg",
        "/img/agua2.jpg",
    ],
  };