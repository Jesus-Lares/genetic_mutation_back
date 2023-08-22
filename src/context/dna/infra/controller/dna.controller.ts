import { Request, Response } from "express";

import HasMutationUseCase from "../useCases/HasMutation";
import { HAS_MUTATION, NOT_HAS_MUTATION } from "../constants/messageResponse";

export default class DnaController {
  async hasMutation(req: Request, res: Response): Promise<Response> {
    const { dna = [] } = req.body;
    const hasMutationUseCase = new HasMutationUseCase();
    const result = hasMutationUseCase.exec(dna);
    if (!result) return res.status(403).json({ message: NOT_HAS_MUTATION });
    return res.status(200).json({ message: HAS_MUTATION });
  }
}
