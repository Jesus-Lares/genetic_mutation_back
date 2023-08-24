import { TExpressHandler } from "@types";
import sanitizeInput from "./sanitize";

const cleanReqInputs: TExpressHandler = (req, res, next) => {
  try {
    if (req.body) req.body = sanitizeInput(req.body);
    next();
  } catch (error) {
    next(error);
  }
};

export default cleanReqInputs;
