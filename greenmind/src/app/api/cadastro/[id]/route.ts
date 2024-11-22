import { NextResponse } from "next/server";

interface BaseParams {
  id?: string; 
  categoria?: string; 
}

interface RouteContext {
  params: BaseParams;
}

export async function GET(request: Request, { params }: RouteContext) {
  const { id, categoria } = params;

  try {
    let url = "http://localhost:8080/projetos";
    if (id) {
      url = `http://localhost:8080/projetos/${id}`;
    } 
    else if (categoria) {
      url = `http://localhost:8080/projetos/categoria/${categoria}`;
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erro na API externa:", errorData);
      return NextResponse.json(
        { error: `Erro na API externa: ${errorData.error || response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error("Erro ao acessar os dados:", error);
    return NextResponse.json({ error: "Erro ao acessar os dados." }, { status: 500 });
  }
}