/* eslint-disable no-restricted-syntax */
import { hasMutationInDirection } from "@utils";
import { directions } from "./core/constants";

const hasMutation = (dna: string[]): boolean => {
  const n = dna.length;
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      for (const [dx, dy] of directions) {
        if (hasMutationInDirection({ dna, x, y, dx, dy })) return true;
      }
    }
  }

  return false;
};

export default hasMutation;
