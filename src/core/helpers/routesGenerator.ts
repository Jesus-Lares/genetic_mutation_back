/* eslint-disable no-restricted-syntax */
import { Route } from "@types";
import Router, { Express } from "express";

const routesGenerator = (routes: Route[]): Express => {
  const router = Router();

  for (const route of routes) {
    const { method, path, handler } = route;
    router[method](path, handler);
  }

  return router;
};

export default routesGenerator;
