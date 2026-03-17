export enum NaturalezaCuenta {
  ACTIVO = "activo",
  PASIVO = "pasivo",
  PATRIMONIO = "patrimonio",
  RESULTADO = "resultado",
}

export enum ClasificacionResultado {
  VENTAS = "ventas",
  CMV = "cmv",
  GASTOS_COMERCIALES_ADMINISTRATIVOS = "gastos_comerciales_administrativos",
  GASTOS_PRODUCCION = "gastos_produccion",
  IMPUESTOS = "impuestos",
  OTROS = "otros",
}

export interface CreateCuentaDTO {
  codigo?: string;
  nombre: string;
  naturaleza: NaturalezaCuenta;
  clasificacionResultado?: ClasificacionResultado;
}

export interface UpdateCuentaDTO extends Partial<CreateCuentaDTO> {}

export interface CuentaResponseDTO {
  id: string;
  codigo?: string;
  nombre: string;
  naturaleza: NaturalezaCuenta;
  clasificacionResultado?: ClasificacionResultado;
  createdAt: Date;
  updatedAt: Date;
}
