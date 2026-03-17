import {
  AsientoDiario,
  IAsientoDiario,
} from "../../models/finanzas/asientoDiario.model";
import {
  AsientoResponseDTO,
  CreateAsientoDTO,
  UpdateAsientoDTO,
} from "../../types/finanzas/asiento.types";

const mapToResponseDTO = (asiento: IAsientoDiario): AsientoResponseDTO => {
  return {
    id: asiento._id.toString(),
    fecha: asiento.fecha,
    asientoRef: asiento.asientoRef,
    cuentaId: asiento.cuentaId.toString(),
    debe: asiento.debe,
    haber: asiento.haber,
    comentario: asiento.comentario,
    createdAt: asiento.createdAt,
    updatedAt: asiento.updatedAt,
  };
};

export const createAsiento = async (
  data: CreateAsientoDTO,
): Promise<AsientoResponseDTO> => {
  const asiento = new AsientoDiario(data);
  const saved = await asiento.save();
  return mapToResponseDTO(saved);
};

export const getAllAsientos = async (): Promise<AsientoResponseDTO[]> => {
  const asientos = await AsientoDiario.find().sort({
    fecha: -1,
    createdAt: -1,
  });
  return asientos.map(mapToResponseDTO);
};

export const getAsientoById = async (
  id: string,
): Promise<AsientoResponseDTO | null> => {
  const asiento = await AsientoDiario.findById(id);
  return asiento ? mapToResponseDTO(asiento) : null;
};

export const updateAsiento = async (
  id: string,
  data: UpdateAsientoDTO,
): Promise<AsientoResponseDTO | null> => {
  const updated = await AsientoDiario.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });

  return updated ? mapToResponseDTO(updated) : null;
};

export const deleteAsiento = async (id: string) => {
  return await AsientoDiario.findByIdAndDelete(id);
};

export const getAsientosByRango = async (desde?: Date, hasta?: Date) => {
  const filtro: Record<string, unknown> = {};
  if (desde || hasta) {
    filtro.fecha = {};
  }

  if (desde) {
    (filtro.fecha as Record<string, unknown>).$gte = desde;
  }

  if (hasta) {
    (filtro.fecha as Record<string, unknown>).$lte = hasta;
  }

  return await AsientoDiario.find(filtro).populate(
    "cuentaId",
    "nombre naturaleza clasificacionResultado",
  );
};
