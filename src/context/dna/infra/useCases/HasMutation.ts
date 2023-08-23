/* eslint-disable no-restricted-syntax */
import { isValidDNAStrand } from "@helpers/validators";
import { ErrorData } from "@errors/customErrors";
import { EMPTY_DATA, INVALID_DATA } from "@errors/messages";

import CreateAdnRecordUseCase from "./CreateAdnRecord";
import { TypeAlgorithm } from "../../domain/DNA";
import {
  hasMutationDirectionalApproach as directionalApproach,
  hasMutationRegex as regex,
} from "../utils/algorithm";

interface Params {
  dna: string[];
  typeAlgorithm?: TypeAlgorithm;
}

class HasMutationUseCase {
  async exec(params: Params): Promise<boolean> {
    const { dna = [], typeAlgorithm = "directionalApproach" } = params;
    this.validParams(dna);
    const fnAlgorithm = typeAlgorithm === "regex" ? regex : directionalApproach;
    const isMutation = fnAlgorithm(dna);
    await this.createDNARecord({ isMutation, sequence: dna, typeAlgorithm });
    return isMutation;
  }

  validParams(dna: string[]) {
    if (!dna?.length) throw new ErrorData({ message: EMPTY_DATA, code: 400 });
    if (!isValidDNAStrand(dna)) throw new ErrorData({ message: INVALID_DATA, code: 400 });
  }

  createDNARecord(dnaRecord: {
    sequence: string[];
    isMutation: boolean;
    typeAlgorithm: TypeAlgorithm;
  }) {
    const create = new CreateAdnRecordUseCase();
    return create.exec(dnaRecord);
  }
}

export default HasMutationUseCase;
