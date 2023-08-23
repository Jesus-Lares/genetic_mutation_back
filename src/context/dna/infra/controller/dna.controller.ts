import { Request, Response } from "express";

import { ErrorData } from "@src/core/errors/customErrors";
import { INTERNAL_ERROR } from "@src/core/errors/messages";

import GetStatsUseCase from "../useCases/GetStats";
import HasMutationUseCase from "../useCases/HasMutation";

import { TypeAlgorithm } from "../../domain/DNA";
import { HAS_MUTATION, NOT_HAS_MUTATION } from "../constants/messageResponse";

export default class DnaController {
  async hasMutation(req: Request, res: Response): Promise<Response> {
    const hasMutationUseCase = new HasMutationUseCase();
    const result = await hasMutationUseCase.exec(req.body);
    if (!result) return res.status(403).json({ message: NOT_HAS_MUTATION });
    return res.status(200).json({ message: HAS_MUTATION });
  }

  async getStats(req: Request, res: Response): Promise<Response> {
    const { typeAlgorithm } = req.query;
    const getStatsUseCase = new GetStatsUseCase();
    const result = await getStatsUseCase.exec(typeAlgorithm as TypeAlgorithm);
    if (!result) throw new ErrorData({ message: INTERNAL_ERROR, code: 500 });
    return res.status(200).json(result);
  }
}
