export interface CreateAsientoDTO {
  fecha: Date;
  asientoRef: string;
  cuentaId: string;
  debe: number;
  haber: number;
  comentario?: string;
}

export interface UpdateAsientoDTO extends Partial<CreateAsientoDTO> {}

export interface AsientoResponseDTO {
  id: string;
  fecha: Date;
  asientoRef: string;
  cuentaId: string;
  debe: number;
  haber: number;
  comentario?: string;
  createdAt: Date;
  updatedAt: Date;
}
