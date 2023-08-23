import requestCatch from "@utils/catchErrors";
import { EnumMethodRoute, Route } from "@types";

import DnaController from "../controller/dna.controller";
import validParams from "../middlewares/validParams";

const URL_BASE = "";
const controller = new DnaController();
const routes: Route[] = [
  {
    path: `${URL_BASE}/mutation`,
    method: EnumMethodRoute.POST,
    handler: [requestCatch(validParams), requestCatch(controller.hasMutation)],
  },
  {
    path: `${URL_BASE}/stats`,
    method: EnumMethodRoute.GET,
    handler: [requestCatch(controller.getStats)],
  },
];

export default routes;
