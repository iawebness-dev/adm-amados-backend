import { body, ValidationChain } from "express-validator";

const fecha: ValidationChain[] = [
  body("fecha").optional().isISO8601().withMessage("Fecha inválida"),
];

const asientoRef: ValidationChain[] = [
  body("asientoRef")
    .optional()
    .isString()
    .withMessage("asientoRef debe ser texto")
    .isLength({ min: 3, max: 40 })
    .withMessage("asientoRef debe tener entre 3 y 40 caracteres"),
];

const cuentaId: ValidationChain[] = [
  body("cuentaId").optional().isMongoId().withMessage("cuentaId inválido"),
];

const debeHaber: ValidationChain[] = [
  body("debe")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Debe debe ser un número mayor o igual a 0"),
  body("haber")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Haber debe ser un número mayor o igual a 0"),
  body().custom((data) => {
    const debe = Number(data.debe || 0);
    const haber = Number(data.haber || 0);

    if ((debe === 0 && haber === 0) || (debe > 0 && haber > 0)) {
      throw new Error("Debe cargar solo DEBE o solo HABER en cada asiento");
    }

    return true;
  }),
];

const comentario: ValidationChain[] = [
  body("comentario")
    .optional()
    .isString()
    .withMessage("El comentario debe ser texto")
    .isLength({ max: 250 })
    .withMessage("El comentario no puede superar 250 caracteres"),
];

export const createAsientoValidator: ValidationChain[] = [
  body("fecha").exists().withMessage("La fecha es obligatoria"),
  body("asientoRef").exists().withMessage("asientoRef es obligatorio"),
  body("cuentaId").exists().withMessage("cuentaId es obligatorio"),
  ...fecha,
  ...asientoRef,
  ...cuentaId,
  ...debeHaber,
  ...comentario,
];

export const updateAsientoValidator: ValidationChain[] = [
  ...fecha,
  ...asientoRef,
  ...cuentaId,
  ...debeHaber,
  ...comentario,
];
