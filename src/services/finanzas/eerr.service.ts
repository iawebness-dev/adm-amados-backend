import { getLibroMayor } from "./libro-mayor.service";
import {
  ClasificacionResultado,
  NaturalezaCuenta,
} from "../../types/finanzas/cuenta.types";
import { EerrResponseDTO } from "../../types/finanzas/reportes.types";

const round2 = (value: number): number => Math.round(value * 100) / 100;

const initEerr = (): EerrResponseDTO => ({
  ventas: 0,
  cmv: 0,
  gastosComercialesAdministrativos: 0,
  gastosProduccion: 0,
  impuestos: 0,
  gastosOperativos: 0,
  resultadoBruto: 0,
  margenOperativo: 0,
  margenNeto: 0,
});

export const getEerr = async (
  desde?: Date,
  hasta?: Date,
): Promise<EerrResponseDTO> => {
  const mayor = await getLibroMayor(desde, hasta);
  const eerr = initEerr();

  for (const cuenta of mayor) {
    if (cuenta.naturaleza !== NaturalezaCuenta.RESULTADO) {
      continue;
    }

    const resultadoPositivo = Math.max(cuenta.totalHaber - cuenta.totalDebe, 0);
    const gastoPositivo = Math.max(cuenta.totalDebe - cuenta.totalHaber, 0);

    switch (cuenta.clasificacionResultado) {
      case ClasificacionResultado.VENTAS:
        eerr.ventas = round2(eerr.ventas + resultadoPositivo);
        break;
      case ClasificacionResultado.CMV:
        eerr.cmv = round2(eerr.cmv + gastoPositivo);
        break;
      case ClasificacionResultado.GASTOS_COMERCIALES_ADMINISTRATIVOS:
        eerr.gastosComercialesAdministrativos = round2(
          eerr.gastosComercialesAdministrativos + gastoPositivo,
        );
        break;
      case ClasificacionResultado.GASTOS_PRODUCCION:
        eerr.gastosProduccion = round2(eerr.gastosProduccion + gastoPositivo);
        break;
      case ClasificacionResultado.IMPUESTOS:
        eerr.impuestos = round2(eerr.impuestos + gastoPositivo);
        break;
      default:
        break;
    }
  }

  eerr.gastosOperativos = round2(
    eerr.gastosComercialesAdministrativos + eerr.gastosProduccion,
  );
  eerr.resultadoBruto = round2(eerr.ventas - eerr.cmv);
  eerr.margenOperativo = round2(eerr.resultadoBruto - eerr.gastosOperativos);
  eerr.margenNeto = round2(eerr.margenOperativo - eerr.impuestos);

  return eerr;
};
