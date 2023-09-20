import dotEnv from "dotenv";
import path from "path";

import {
  DEFAULT_API_VERSION,
  DEFAULT_INITIAL_ROUTE,
  DEFAULT_IP_SERVER,
  DEFAULT_PORT,
  DEFAULT_SERVER_URL,
  NODE_ENV,
} from "@constants";

const envPaths = new Map([
  [NODE_ENV.test, ".env.test"],
  [NODE_ENV.dev, ".env.development"],
  ["default", ".env.production"],
]);

const nodeEnv = process.env.NODE_ENV?.trim() || "default";
const envPath = envPaths.get(nodeEnv) || "";
const envFolder = path.join(process.cwd(), envPath);

dotEnv.config({
  path: envFolder,
});

const {
  PORT: port = DEFAULT_PORT,
  IP_SERVER: ipServer = DEFAULT_IP_SERVER,
  API_VERSION: apiVersion = DEFAULT_API_VERSION,
  INITIAL_ROUTE: initialRoute = DEFAULT_INITIAL_ROUTE,
  SERVER_URL: serverUrl = DEFAULT_SERVER_URL,
  DB_NAME: dbName = "",
  DB_USER: dbUser = "",
  DB_PASSWORD: dbPassword = "",
  DB_HOST: dbHost = "localhost",
  DB_PORT: dbPort = 5432,
} = process.env;

const user = encodeURIComponent(dbUser);
const password = encodeURIComponent(dbPassword);

const database = `mysql://${user}:${password}@${dbHost}:${dbPort}/${dbName}`;

export default {
  port,
  ipServer,
  apiVersion,
  initialRoute,
  serverUrl,
  database,
};
