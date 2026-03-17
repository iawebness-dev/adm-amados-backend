import { query, ValidationChain } from "express-validator";

const tipoPeriodo: ValidationChain[] = [
  query("tipoPeriodo")
    .optional()
    .isIn(["mes", "anio", "personalizado"])
    .withMessage("tipoPeriodo inválido"),
];

const anio: ValidationChain[] = [
  query("anio")
    .optional()
    .isInt({ min: 2000, max: 3000 })
    .withMessage("anio debe ser un número válido"),
];

const mes: ValidationChain[] = [
  query("mes")
    .optional()
    .isInt({ min: 1, max: 12 })
    .withMessage("mes debe ser un número entre 1 y 12"),
];

const rango: ValidationChain[] = [
  query("desde").optional().isISO8601().withMessage("desde inválido"),
  query("hasta").optional().isISO8601().withMessage("hasta inválido"),
];

export const periodoValidator: ValidationChain[] = [
  ...tipoPeriodo,
  ...anio,
  ...mes,
  ...rango,
];
