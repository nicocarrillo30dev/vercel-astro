// src/types/Curso.ts (o donde prefieras)

export interface CoverImage {
  id: number;
  url: string;
  filename: string;
  Alt?: string | null;
}

export interface ImagenAdicional {
  id: string;
  imagen: CoverImage;
}

export interface Curso {
  id: number;
  title: string;
  slug: string;
  coverImage?: CoverImage;
  imagenesAdicionales?: ImagenAdicional[];
  descripcionCurso?: string | null;
  // ... otros campos que necesites
}

export interface APICursos {
  docs: Curso[];
}
