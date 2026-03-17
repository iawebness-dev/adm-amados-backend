import { Router } from "express";
import * as diarioController from "../../controllers/finanzas/libro-diario.controller";
import {
  createAsientoValidator,
  updateAsientoValidator,
} from "../../validators/finanzas/asientos.validator";
import { authenticate, authorize } from "../../middlewares/auth.middleware";
import validateDto from "../../middlewares/dto.middleware";

const router: Router = Router();

router.get("/", authenticate, diarioController.getAllAsientos);
router.get("/:id", authenticate, diarioController.getAsientoById);

router.post(
  "/",
  authenticate,
  authorize(["admin"]),
  createAsientoValidator,
  validateDto,
  diarioController.createAsiento,
);

router.put(
  "/:id",
  authenticate,
  authorize(["admin"]),
  updateAsientoValidator,
  validateDto,
  diarioController.updateAsiento,
);

router.delete(
  "/:id",
  authenticate,
  authorize(["admin"]),
  diarioController.deleteAsiento,
);

export default router;
