import { RequestHandler } from "express";

export enum EnumMethodRoute {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

export interface Route {
  path: string;
  method: EnumMethodRoute;
  handler: RequestHandler[];
}
