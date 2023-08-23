import { Request } from "express";

import env from "@config/env";

const corsOptionsDelegate = (req: Request, callback: any) => {
  interface ICorsOptions {
    origin: boolean;
  }
  const allowlist = [
    "http://localhost:3000",
    `http://${env.ipServer}:3000`,
    `http://localhost:${env.port}`,
  ];

  const corsOptions: ICorsOptions = { origin: false };
  const origin = req.header("Origin") || "";
  const isValidOrigin = allowlist.indexOf(origin) >= 0;
  corsOptions.origin = !!isValidOrigin;
  callback(null, corsOptions);
};

export default corsOptionsDelegate;
