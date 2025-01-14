export interface CoverImage {
  id: number;
  url: string;
  filename: string;
  Alt?: string | null;
  // ... otros campos que necesites
}

export interface ImagenAdicional {
  id: string;
  imagen: CoverImage;
}

export interface Curso {
  id: number;
  title: string;
  slug: string;
  coverImage?: CoverImage; // puede venir o no
  imagenesAdicionales?: ImagenAdicional[]; // array de imágenes
  descripcionCurso?: string | null;
  // ... más campos si los requieres (precio, etc.)
}

export interface APICursos {
  docs: Curso[];
}
