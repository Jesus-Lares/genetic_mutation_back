/* eslint-disable no-console */
import { Sequelize } from "sequelize";

import { NODE_ENV } from "@src/core/constants";
import setupModels from "./setupModels";
import env from "../env";
import { connectDBTest } from "./dbTests";
/*
const connectDB = (): Sequelize => {
  const isTest = NODE_ENV.test === process.env.NODE_ENV?.trim();
  if (isTest) return connectDBTest();

  const sequelize = new Sequelize(env.database, {
    logging: false,
    native: false,
  });

  sequelize
    .authenticate()
    .then(() => console.log("PostgreSQL connection has been established successfully."))
    .catch((err) => console.error("Unable to connect to the database:", err));

  setupModels(sequelize);
  sequelize.sync();

  process.on("SIGINT", async () => {
    await sequelize.close();
    console.log("PostgreSQL connection closed.");
    process.exit(0);
  });

  return sequelize;
}; */

export const connectDB = async (): Promise<Sequelize> => {
  const isTest = NODE_ENV.test === process.env.NODE_ENV?.trim();
  if (isTest) return connectDBTest();

  const sequelize = new Sequelize(env.database, {
    logging: false,
    native: false,
  });

  await sequelize.authenticate();
  setupModels(sequelize);
  await sequelize.sync();

  process.on("SIGINT", async () => {
    await sequelize.close();
    console.log("PostgreSQL connection closed.");
    process.exit(0);
  });

  return sequelize;
};

export default connectDB;
