import { Router } from "express";
import * as balancesController from "../../controllers/finanzas/balances.controller";
import { authenticate } from "../../middlewares/auth.middleware";
import validateDto from "../../middlewares/dto.middleware";
import { periodoValidator } from "../../validators/finanzas/periodo.validator";

const router: Router = Router();

router.get(
  "/",
  authenticate,
  periodoValidator,
  validateDto,
  balancesController.getBalanceByPeriodo,
);

export default router;
