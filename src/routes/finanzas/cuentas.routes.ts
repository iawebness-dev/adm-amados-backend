import { Router } from "express";
import * as cuentasController from "../../controllers/finanzas/cuentas.controller";
import {
  createCuentaValidator,
  updateCuentaValidator,
} from "../../validators/finanzas/cuentas.validator";
import { authenticate, authorize } from "../../middlewares/auth.middleware";
import validateDto from "../../middlewares/dto.middleware";

const router: Router = Router();

router.get("/", authenticate, cuentasController.getAllCuentas);
router.get("/:id", authenticate, cuentasController.getCuentaById);

router.post(
  "/",
  authenticate,
  authorize(["admin"]),
  createCuentaValidator,
  validateDto,
  cuentasController.createCuenta,
);

router.put(
  "/:id",
  authenticate,
  authorize(["admin"]),
  updateCuentaValidator,
  validateDto,
  cuentasController.updateCuenta,
);

router.delete(
  "/:id",
  authenticate,
  authorize(["admin"]),
  cuentasController.deleteCuenta,
);

export default router;
