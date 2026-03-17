import { Request, Response } from "express";
import * as espService from "../../services/finanzas/esp.service";

export const getEsp = async (req: Request, res: Response) => {
  try {
    const desde = req.query.desde
      ? new Date(String(req.query.desde))
      : undefined;
    const hasta = req.query.hasta
      ? new Date(String(req.query.hasta))
      : undefined;

    const esp = await espService.getEsp(desde, hasta);
    return res.status(200).json(esp);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
