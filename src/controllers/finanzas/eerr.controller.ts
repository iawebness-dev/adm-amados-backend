import { Request, Response } from "express";
import * as eerrService from "../../services/finanzas/eerr.service";

export const getEerr = async (req: Request, res: Response) => {
  try {
    const desde = req.query.desde
      ? new Date(String(req.query.desde))
      : undefined;
    const hasta = req.query.hasta
      ? new Date(String(req.query.hasta))
      : undefined;

    const eerr = await eerrService.getEerr(desde, hasta);
    return res.status(200).json(eerr);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
