import routesGenerator from "@helpers/routesGenerator";

import PublicRoutes from "./public";

const routes = [...PublicRoutes];

const router = routesGenerator(routes);

export default router;
