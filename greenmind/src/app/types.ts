export interface Categoria {
    idCat: number;
    nomeCat: string;
  }

 export interface Projeto {
    idProj: number;
    nomeProj: string;
    detalhes: string;
    descricao: string;
    categoriaId: string;
    emailAutor: string;
    nomeAutor: string;
    imagemUrl: string; 
}