import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export const validation = (
  req: Request,
  res: Response,
  next: NextFunction,
  schemaRules: ObjectSchema
) => {
  const data = req.body || {};
  const options = {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true,
  };
  const { error } = schemaRules.validate(data, options);
  if (error?.details) {
    const errorMessages = error.details.map((error) => error.message);
    return res.status(400).json({
      body: errorMessages,
    });
  }
  if (error?.message) return res.status(400).json({ message: error.message });
  return next();
};

export default validation;
