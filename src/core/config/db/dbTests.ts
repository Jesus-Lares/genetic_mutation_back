import { Sequelize } from "sequelize";

import env from "@config/env";
import { DNA_RECORD_TABLE } from "@src/context/dna/domain/DnaSchema";

import setupModels from "./setupModels";

const tableNames = [DNA_RECORD_TABLE];

export const connectDBTest = async (): Promise<Sequelize> => {
  const sequelize = new Sequelize(env.database, {
    logging: false,
    native: false,
  });

  await sequelize.authenticate();
  setupModels(sequelize);
  await sequelize.sync();

  return sequelize;
};

export const clearDataBase = async (db: Sequelize, tables = tableNames): Promise<void> => {
  const promises = tables.map((tableName) => {
    const query = `DELETE FROM \`${tableName}\``;
    return db.query(query);
  });
  await Promise.allSettled(promises);
};

export const closeDataBase = async (db: Sequelize): Promise<void> => {
  await clearDataBase(db);
  await db.close();
};
