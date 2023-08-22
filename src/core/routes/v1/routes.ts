import { Router } from "express";
import DnaRoutes from "@context/dna/infra/routes";

const router: Router = Router();

router.use("", DnaRoutes);

export default router;
