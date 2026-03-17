import { Cuenta, ICuenta } from "../../models/finanzas/cuenta.model";
import {
  CreateCuentaDTO,
  CuentaResponseDTO,
  UpdateCuentaDTO,
} from "../../types/finanzas/cuenta.types";

const mapToResponseDTO = (cuenta: ICuenta): CuentaResponseDTO => {
  return {
    id: cuenta._id.toString(),
    codigo: cuenta.codigo,
    nombre: cuenta.nombre,
    naturaleza: cuenta.naturaleza,
    clasificacionResultado: cuenta.clasificacionResultado,
    createdAt: cuenta.createdAt,
    updatedAt: cuenta.updatedAt,
  };
};

export const createCuenta = async (
  data: CreateCuentaDTO,
): Promise<CuentaResponseDTO> => {
  const newCuenta = new Cuenta(data);
  const saved = await newCuenta.save();
  return mapToResponseDTO(saved);
};

export const getAllCuentas = async (): Promise<CuentaResponseDTO[]> => {
  const cuentas = await Cuenta.find().sort({ nombre: 1 });
  return cuentas.map(mapToResponseDTO);
};

export const getCuentaById = async (
  id: string,
): Promise<CuentaResponseDTO | null> => {
  const cuenta = await Cuenta.findById(id);
  return cuenta ? mapToResponseDTO(cuenta) : null;
};

export const updateCuenta = async (
  id: string,
  data: UpdateCuentaDTO,
): Promise<CuentaResponseDTO | null> => {
  const updated = await Cuenta.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  return updated ? mapToResponseDTO(updated) : null;
};

export const deleteCuenta = async (id: string) => {
  return await Cuenta.findByIdAndDelete(id);
};
