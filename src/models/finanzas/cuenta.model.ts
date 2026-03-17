import mongoose, { Document, Schema } from "mongoose";
import {
  ClasificacionResultado,
  NaturalezaCuenta,
} from "../../types/finanzas/cuenta.types";

export interface ICuenta extends Document {
  codigo?: string;
  nombre: string;
  naturaleza: NaturalezaCuenta;
  clasificacionResultado?: ClasificacionResultado;
  createdAt: Date;
  updatedAt: Date;
}

const cuentaSchema = new Schema<ICuenta>(
  {
    codigo: {
      type: String,
      trim: true,
    },
    nombre: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 2,
    },
    naturaleza: {
      type: String,
      enum: Object.values(NaturalezaCuenta),
      required: true,
    },
    clasificacionResultado: {
      type: String,
      enum: Object.values(ClasificacionResultado),
      required: false,
    },
  },
  { timestamps: true },
);

cuentaSchema.index({ codigo: 1 });
cuentaSchema.index({ naturaleza: 1 });

export const Cuenta = mongoose.model<ICuenta>("Cuenta", cuentaSchema);
