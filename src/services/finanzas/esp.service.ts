import { getEerr } from "./eerr.service";
import { getLibroMayor } from "./libro-mayor.service";
import { NaturalezaCuenta } from "../../types/finanzas/cuenta.types";
import { EspResponseDTO } from "../../types/finanzas/reportes.types";

const round2 = (value: number): number => Math.round(value * 100) / 100;

export const getEsp = async (
  desde?: Date,
  hasta?: Date,
): Promise<EspResponseDTO> => {
  const mayor = await getLibroMayor(desde, hasta);
  const eerr = await getEerr(desde, hasta);

  const activos = round2(
    mayor
      .filter((cuenta) => cuenta.naturaleza === NaturalezaCuenta.ACTIVO)
      .reduce((acc, cuenta) => acc + cuenta.saldo, 0),
  );

  const pasivos = round2(
    mayor
      .filter((cuenta) => cuenta.naturaleza === NaturalezaCuenta.PASIVO)
      .reduce((acc, cuenta) => acc + cuenta.saldo, 0),
  );

  const patrimonio = round2(
    mayor
      .filter((cuenta) => cuenta.naturaleza === NaturalezaCuenta.PATRIMONIO)
      .reduce((acc, cuenta) => acc + cuenta.saldo, 0),
  );

  const patrimonioNeto = round2(patrimonio + eerr.margenNeto);
  const pasivosMasPatrimonio = round2(pasivos + patrimonioNeto);

  return {
    activos,
    pasivos,
    patrimonioNeto,
    pasivosMasPatrimonio,
    diferencia: round2(activos - pasivosMasPatrimonio),
  };
};
