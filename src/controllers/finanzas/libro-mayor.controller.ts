import { Request, Response } from "express";
import * as libroMayorService from "../../services/finanzas/libro-mayor.service";

export const getLibroMayor = async (req: Request, res: Response) => {
  try {
    const desde = req.query.desde
      ? new Date(String(req.query.desde))
      : undefined;
    const hasta = req.query.hasta
      ? new Date(String(req.query.hasta))
      : undefined;

    const mayor = await libroMayorService.getLibroMayor(desde, hasta);
    return res.status(200).json(mayor);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
