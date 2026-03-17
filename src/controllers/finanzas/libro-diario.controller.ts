import { Request, Response } from "express";
import * as libroDiarioService from "../../services/finanzas/libro-diario.service";
import {
  CreateAsientoDTO,
  UpdateAsientoDTO,
} from "../../types/finanzas/asiento.types";

export const createAsiento = async (req: Request, res: Response) => {
  try {
    const asientoData: CreateAsientoDTO = req.body;
    const asiento = await libroDiarioService.createAsiento(asientoData);
    return res.status(201).json(asiento);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllAsientos = async (req: Request, res: Response) => {
  try {
    const asientos = await libroDiarioService.getAllAsientos();
    return res.status(200).json(asientos);
  } catch (error) {
    return res.status(500).json({ error: "Error al obtener asientos" });
  }
};

export const getAsientoById = async (req: Request, res: Response) => {
  const id = req.params.id as string;

  try {
    const asiento = await libroDiarioService.getAsientoById(id);
    if (!asiento) {
      return res.status(404).json({ error: "Asiento no encontrado" });
    }

    return res.status(200).json(asiento);
  } catch (error) {
    return res.status(500).json({ error: `Error al obtener asiento ${id}` });
  }
};

export const updateAsiento = async (req: Request, res: Response) => {
  const id = req.params.id as string;

  try {
    const asientoData: Partial<UpdateAsientoDTO> = req.body;
    const asiento = await libroDiarioService.updateAsiento(id, asientoData);

    if (!asiento) {
      return res.status(404).json({ error: "Asiento no encontrado" });
    }

    return res.status(200).json(asiento);
  } catch (error) {
    return res.status(400).json({ error: `Error al actualizar asiento ${id}` });
  }
};

export const deleteAsiento = async (req: Request, res: Response) => {
  const id = req.params.id as string;

  try {
    const asiento = await libroDiarioService.deleteAsiento(id);
    if (!asiento) {
      return res.status(404).json({ error: "Asiento no encontrado" });
    }

    return res.status(200).json({ message: "Asiento eliminado!" });
  } catch (error) {
    return res.status(500).json({ error: `Error al eliminar asiento ${id}` });
  }
};
