/* eslint-disable no-console */
import express, { Application } from "express";

import addRouter from "@router";
import addPlugins from "@config/addPlugins";
import connectDb from "@config/db";

import { NODE_ENV } from "./core/constants";

const app: Application = express();
addPlugins(app);
addRouter(app);

if (process.env.NODE_ENV?.trim() !== NODE_ENV.test) {
  connectDb()
    .then(() => {
      console.log("PostgreSQL connection of test has been established successfully.");
    })
    .catch(() => {
      console.error("Unable to connect of test to the database:");
    });
}

export default app;
