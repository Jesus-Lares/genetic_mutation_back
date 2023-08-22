/* eslint-disable arrow-body-style */
import { RequestHandler } from "express";

import { BAD_REQUEST } from "@errors/messages";
import { ErrorParams } from "../types";

const getCatchErrorValues = (error: unknown) => {
  const { message = BAD_REQUEST, code = 400 } = error as ErrorParams;
  return { message, code };
};

const requestCatch = (requestHandler: RequestHandler): RequestHandler => {
  return async (req, res, next): Promise<any> => {
    try {
      return await requestHandler(req, res, next);
    } catch (error) {
      const { code, message } = getCatchErrorValues(error);
      return res.status(code).json({ message });
    }
  };
};

export default requestCatch;
