import express, { Application } from "express";

import addRouter from "@router";
import addPlugins from "@config/addPlugins";

const app: Application = express();
addPlugins(app);
addRouter(app);

export default app;
