import mongoose, { Document, Schema, Types } from "mongoose";

export interface IAsientoDiario extends Document {
  fecha: Date;
  asientoRef: string;
  cuentaId: Types.ObjectId;
  debe: number;
  haber: number;
  comentario?: string;
  createdAt: Date;
  updatedAt: Date;
}

const asientoDiarioSchema = new Schema<IAsientoDiario>(
  {
    fecha: {
      type: Date,
      required: true,
      default: Date.now,
    },
    asientoRef: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    cuentaId: {
      type: Schema.Types.ObjectId,
      ref: "Cuenta",
      required: true,
    },
    debe: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    haber: {
      type: Number,
      required: true,
      min: 0,
      default: 0,
    },
    comentario: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

asientoDiarioSchema.index({ fecha: 1 });
asientoDiarioSchema.index({ cuentaId: 1 });
asientoDiarioSchema.index({ asientoRef: 1, fecha: 1 });

export const AsientoDiario = mongoose.model<IAsientoDiario>(
  "AsientoDiario",
  asientoDiarioSchema,
);
