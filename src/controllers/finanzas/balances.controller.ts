import { Request, Response } from "express";
import * as balancesService from "../../services/finanzas/balances.service";
import { BalancePeriodoQueryDTO } from "../../types/finanzas/reportes.types";

export const getBalanceByPeriodo = async (req: Request, res: Response) => {
  try {
    const query = req.query as unknown as BalancePeriodoQueryDTO;
    const balance = await balancesService.getBalanceByPeriodo(query);
    return res.status(200).json(balance);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
