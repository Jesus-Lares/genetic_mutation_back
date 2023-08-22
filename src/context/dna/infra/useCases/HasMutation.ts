/* eslint-disable no-restricted-syntax */
import { isValidDNAStrand } from "@helpers/validators";
import { ErrorData } from "@errors/customErrors";
import { EMPTY_DATA, INVALID_DATA } from "@errors/messages";

import { hasMutationInDirection } from "../utils";
import { directions } from "../constants";

class HasMutationUseCase {
  exec(dna: string[]): boolean {
    const n = dna.length;
    if (!dna?.length) throw new ErrorData({ message: EMPTY_DATA, code: 400 });
    if (!isValidDNAStrand(dna)) throw new ErrorData({ message: INVALID_DATA, code: 400 });

    for (let x = 0; x < n; x++) {
      for (let y = 0; y < n; y++) {
        for (const [dx, dy] of directions) {
          if (hasMutationInDirection({ dna, x, y, dx, dy })) return true;
        }
      }
    }

    return false;
  }
}

export default HasMutationUseCase;
