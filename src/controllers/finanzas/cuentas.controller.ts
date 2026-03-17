import { Request, Response } from "express";
import * as cuentasService from "../../services/finanzas/cuentas.service";
import {
  CreateCuentaDTO,
  UpdateCuentaDTO,
} from "../../types/finanzas/cuenta.types";

export const createCuenta = async (req: Request, res: Response) => {
  try {
    const cuentaData: CreateCuentaDTO = req.body;
    const cuenta = await cuentasService.createCuenta(cuentaData);
    return res.status(201).json(cuenta);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllCuentas = async (req: Request, res: Response) => {
  try {
    const cuentas = await cuentasService.getAllCuentas();
    return res.status(200).json(cuentas);
  } catch (error) {
    return res.status(500).json({ error: "Error al obtener cuentas" });
  }
};

export const getCuentaById = async (req: Request, res: Response) => {
  const id = req.params.id as string;

  try {
    const cuenta = await cuentasService.getCuentaById(id);
    if (!cuenta) {
      return res.status(404).json({ error: "Cuenta no encontrada" });
    }

    return res.status(200).json(cuenta);
  } catch (error) {
    return res.status(500).json({ error: `Error al obtener cuenta ${id}` });
  }
};

export const updateCuenta = async (req: Request, res: Response) => {
  const id = req.params.id as string;

  try {
    const cuentaData: Partial<UpdateCuentaDTO> = req.body;
    const cuenta = await cuentasService.updateCuenta(id, cuentaData);

    if (!cuenta) {
      return res.status(404).json({ error: "Cuenta no encontrada" });
    }

    return res.status(200).json(cuenta);
  } catch (error) {
    return res.status(400).json({ error: `Error al actualizar cuenta ${id}` });
  }
};

export const deleteCuenta = async (req: Request, res: Response) => {
  const id = req.params.id as string;

  try {
    const cuenta = await cuentasService.deleteCuenta(id);
    if (!cuenta) {
      return res.status(404).json({ error: "Cuenta no encontrada" });
    }

    return res.status(200).json({ message: "Cuenta eliminada!" });
  } catch (error) {
    return res.status(500).json({ error: `Error al eliminar cuenta ${id}` });
  }
};
