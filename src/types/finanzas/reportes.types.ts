import { ClasificacionResultado, NaturalezaCuenta } from "./cuenta.types";

export interface LibroMayorCuentaDTO {
  cuentaId: string;
  nombre: string;
  naturaleza: NaturalezaCuenta;
  clasificacionResultado?: ClasificacionResultado;
  totalDebe: number;
  totalHaber: number;
  saldo: number;
}

export interface EerrResponseDTO {
  ventas: number;
  cmv: number;
  gastosComercialesAdministrativos: number;
  gastosProduccion: number;
  impuestos: number;
  gastosOperativos: number;
  resultadoBruto: number;
  margenOperativo: number;
  margenNeto: number;
}

export interface EspResponseDTO {
  activos: number;
  pasivos: number;
  patrimonioNeto: number;
  pasivosMasPatrimonio: number;
  diferencia: number;
}

export interface BalancePeriodoQueryDTO {
  tipoPeriodo?: "mes" | "anio" | "personalizado";
  anio?: string;
  mes?: string;
  desde?: string;
  hasta?: string;
}
