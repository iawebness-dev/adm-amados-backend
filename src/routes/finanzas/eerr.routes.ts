import { Router } from "express";
import * as eerrController from "../../controllers/finanzas/eerr.controller";
import { authenticate } from "../../middlewares/auth.middleware";
import validateDto from "../../middlewares/dto.middleware";
import { periodoValidator } from "../../validators/finanzas/periodo.validator";

const router: Router = Router();

router.get(
  "/",
  authenticate,
  periodoValidator,
  validateDto,
  eerrController.getEerr,
);

export default router;
