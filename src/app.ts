/* eslint-disable no-console */
import express, { Application } from "express";

import addPlugins from "@config/addPlugins";
import connectDb from "@config/db";
import addRouter from "./core/routes";

import { NODE_ENV } from "./core/constants";

const app: Application = express();
addPlugins(app);
addRouter(app);

if (process.env.NODE_ENV?.trim() !== NODE_ENV.test) {
  connectDb()
    .then(() => {
      console.log("Connection of db has been established successfully.");
    })
    .catch((e) => {
      console.error("Unable to connect to the database");
    });
}

export default app;
