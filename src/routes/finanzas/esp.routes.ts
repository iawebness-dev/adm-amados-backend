import { Router } from "express";
import * as espController from "../../controllers/finanzas/esp.controller";
import { authenticate } from "../../middlewares/auth.middleware";
import validateDto from "../../middlewares/dto.middleware";
import { periodoValidator } from "../../validators/finanzas/periodo.validator";

const router: Router = Router();

router.get(
  "/",
  authenticate,
  periodoValidator,
  validateDto,
  espController.getEsp,
);

export default router;
