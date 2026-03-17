import { Router } from "express";
import cuentasRoutes from "./cuentas.routes";
import libroDiarioRoutes from "./libro-diario.routes";
import libroMayorRoutes from "./libro-mayor.routes";
import eerrRoutes from "./eerr.routes";
import espRoutes from "./esp.routes";
import balancesRoutes from "./balances.routes";

const router: Router = Router();

router.use("/cuentas", cuentasRoutes);
router.use("/libro-diario", libroDiarioRoutes);
router.use("/libro-mayor", libroMayorRoutes);
router.use("/eerr", eerrRoutes);
router.use("/esp", espRoutes);
router.use("/balances", balancesRoutes);

export default router;
