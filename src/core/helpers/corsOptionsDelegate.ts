import { Request } from "express";

import env from "@config/env";

const corsOptionsDelegate = (req: Request, callback: any) => {
  interface ICorsOptions {
    origin: boolean;
  }
  const allowlist = [
    "http://localhost:5173",
    `http://${env.ipServer}:5173`,
    `http://localhost:${env.port}`,
    "http://geneticmutation.jesuslares.com",
    "http://geneticmutation.azurewebsites.net",
  ];

  const corsOptions: ICorsOptions = { origin: false };
  const origin = req.header("Origin") || "";
  const isValidOrigin = allowlist.indexOf(origin) >= 0;
  corsOptions.origin = !!isValidOrigin;
  callback(null, corsOptions);
};

export default corsOptionsDelegate;
