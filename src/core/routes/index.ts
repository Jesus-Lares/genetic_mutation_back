import { Router, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";

import env from "@config/env";
import swaggerSetup from "@config/swagger";
import { ROUTE_DOCUMENTATION } from "@constants";

import path from "path";
import routesV1 from "./v1/routes";

export default (router: Router): void => {
  /* router.use(/^\/(?!api)., (_: Request, res: Response) => {
    const indexPath = path.join(process.cwd(), "public", "index.js");
    res.sendFile(indexPath);
  });
  */

  router.use("/api/v1", routesV1);

  /*
  TODO: can be added to only be seen in development
  const isInDevelopment = process.env.NODE_ENV?.trim() === NODE_ENV.dev;
  */
  router.use(
    `${env.initialRoute}/${ROUTE_DOCUMENTATION}`,
    swaggerUi.serve,
    swaggerUi.setup(swaggerSetup)
  );
};
