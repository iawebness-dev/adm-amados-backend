import { getAsientosByRango } from "./libro-diario.service";
import { LibroMayorCuentaDTO } from "../../types/finanzas/reportes.types";
import {
  ClasificacionResultado,
  NaturalezaCuenta,
} from "../../types/finanzas/cuenta.types";

const round2 = (value: number): number => Math.round(value * 100) / 100;

const saldoPorNaturaleza = (
  naturaleza: NaturalezaCuenta,
  totalDebe: number,
  totalHaber: number,
): number => {
  if (naturaleza === NaturalezaCuenta.ACTIVO) {
    return totalDebe - totalHaber;
  }

  return totalHaber - totalDebe;
};

export const getLibroMayor = async (
  desde?: Date,
  hasta?: Date,
): Promise<LibroMayorCuentaDTO[]> => {
  const asientos = await getAsientosByRango(desde, hasta);

  const acumulado = new Map<string, LibroMayorCuentaDTO>();

  for (const asiento of asientos) {
    const cuenta = asiento.cuentaId as unknown as {
      _id: string;
      nombre: string;
      naturaleza: NaturalezaCuenta;
      clasificacionResultado?: ClasificacionResultado;
    };

    const key = cuenta._id.toString();
    if (!acumulado.has(key)) {
      acumulado.set(key, {
        cuentaId: key,
        nombre: cuenta.nombre,
        naturaleza: cuenta.naturaleza,
        clasificacionResultado: cuenta.clasificacionResultado,
        totalDebe: 0,
        totalHaber: 0,
        saldo: 0,
      });
    }

    const actual = acumulado.get(key)!;
    actual.totalDebe = round2(actual.totalDebe + asiento.debe);
    actual.totalHaber = round2(actual.totalHaber + asiento.haber);
    actual.saldo = round2(
      saldoPorNaturaleza(
        actual.naturaleza,
        actual.totalDebe,
        actual.totalHaber,
      ),
    );
  }

  return [...acumulado.values()].sort((a, b) =>
    a.nombre.localeCompare(b.nombre),
  );
};
