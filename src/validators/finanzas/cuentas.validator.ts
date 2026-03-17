import { body, ValidationChain } from "express-validator";
import {
  ClasificacionResultado,
  NaturalezaCuenta,
} from "../../types/finanzas/cuenta.types";

const codigo: ValidationChain[] = [
  body("codigo")
    .optional()
    .isString()
    .withMessage("El codigo debe ser una cadena")
    .isLength({ min: 2, max: 20 })
    .withMessage("El codigo debe tener entre 2 y 20 caracteres"),
];

const nombre: ValidationChain[] = [
  body("nombre")
    .optional()
    .isString()
    .withMessage("El nombre debe ser una cadena")
    .isLength({ min: 2, max: 80 })
    .withMessage("El nombre debe tener entre 2 y 80 caracteres"),
];

const naturaleza: ValidationChain[] = [
  body("naturaleza")
    .optional()
    .isIn(Object.values(NaturalezaCuenta))
    .withMessage("Naturaleza de cuenta inválida"),
];

const clasificacionResultado: ValidationChain[] = [
  body("clasificacionResultado")
    .optional()
    .isIn(Object.values(ClasificacionResultado))
    .withMessage("Clasificación de resultado inválida"),
];

export const createCuentaValidator: ValidationChain[] = [
  body("nombre").exists().withMessage("El nombre es obligatorio"),
  body("naturaleza").exists().withMessage("La naturaleza es obligatoria"),
  ...codigo,
  ...nombre,
  ...naturaleza,
  ...clasificacionResultado,
];

export const updateCuentaValidator: ValidationChain[] = [
  ...codigo,
  ...nombre,
  ...naturaleza,
  ...clasificacionResultado,
];
