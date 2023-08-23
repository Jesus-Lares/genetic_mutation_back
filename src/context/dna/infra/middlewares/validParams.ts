import { NextFunction, Request, Response } from "express";
import Joi from "joi";

import validation from "@helpers/validatorParams";
import { EMPTY_DATA, INVALID_DATA } from "@src/core/errors/messages";
import { regex } from "@constants";

const validParams = (req: Request, res: Response, next: NextFunction) => {
  const schemaRules = Joi.object({
    dna: Joi.array()
      .items(Joi.string())
      .empty()
      .when(Joi.array().length(1), {
        then: Joi.array()
          .items(Joi.string().pattern(regex.mutation).message(INVALID_DATA))
          .required(),
        otherwise: Joi.array()
          .items(
            Joi.string().required().messages({
              "string.empty": EMPTY_DATA,
              "any.required": EMPTY_DATA,
            })
          )
          .required(),
      }),
    typeAlgorithm: Joi.string(),
  });

  return validation(req, res, next, schemaRules);
};

export default validParams;
