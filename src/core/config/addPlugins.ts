import express, { Application } from "express";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";

import corsOptionsDelegate from "@helpers/corsOptionsDelegate";
import { NODE_ENV } from "@constants";

export default (app: Application): void => {
  app.use(express.urlencoded({ extended: false }));
  app.use(compression());
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(cors(corsOptionsDelegate));
  app.use(express.json());
  app.use(morgan("dev", { skip: () => process.env.NODE_ENV?.trim() === NODE_ENV.test }));
  app.use(express.static(path.join(process.cwd(), "public")));
};
