import { Router } from "express";
import * as libroMayorController from "../../controllers/finanzas/libro-mayor.controller";
import { authenticate } from "../../middlewares/auth.middleware";
import validateDto from "../../middlewares/dto.middleware";
import { periodoValidator } from "../../validators/finanzas/periodo.validator";

const router: Router = Router();

router.get(
  "/",
  authenticate,
  periodoValidator,
  validateDto,
  libroMayorController.getLibroMayor,
);

export default router;
