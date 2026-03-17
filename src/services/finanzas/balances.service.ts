import { getEerr } from "./eerr.service";
import { getEsp } from "./esp.service";
import { getLibroMayor } from "./libro-mayor.service";
import { BalancePeriodoQueryDTO } from "../../types/finanzas/reportes.types";

const getRango = (
  query: BalancePeriodoQueryDTO,
): { desde?: Date; hasta?: Date } => {
  if (query.tipoPeriodo === "anio" && query.anio) {
    return {
      desde: new Date(`${query.anio}-01-01T00:00:00.000Z`),
      hasta: new Date(`${query.anio}-12-31T23:59:59.999Z`),
    };
  }

  if (query.tipoPeriodo === "mes" && query.anio && query.mes) {
    const month = Number(query.mes);
    const lastDay = new Date(Number(query.anio), month, 0).getDate();

    return {
      desde: new Date(`${query.anio}-${query.mes}-01T00:00:00.000Z`),
      hasta: new Date(
        `${query.anio}-${query.mes}-${String(lastDay).padStart(2, "0")}T23:59:59.999Z`,
      ),
    };
  }

  if (query.desde || query.hasta) {
    return {
      desde: query.desde ? new Date(`${query.desde}T00:00:00.000Z`) : undefined,
      hasta: query.hasta ? new Date(`${query.hasta}T23:59:59.999Z`) : undefined,
    };
  }

  return {};
};

export const getBalanceByPeriodo = async (query: BalancePeriodoQueryDTO) => {
  const { desde, hasta } = getRango(query);

  const [libroMayor, eerr, esp] = await Promise.all([
    getLibroMayor(desde, hasta),
    getEerr(desde, hasta),
    getEsp(desde, hasta),
  ]);

  return {
    periodo: {
      tipo: query.tipoPeriodo || "personalizado",
      desde: desde || null,
      hasta: hasta || null,
    },
    libroMayor,
    eerr,
    esp,
  };
};
