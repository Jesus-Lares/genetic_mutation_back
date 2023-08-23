/* eslint-disable no-restricted-syntax */
import { checkSequence, hasMutationInDirection } from ".";
import { directions } from "../constants";

export const hasMutationRegex = (dna: string[]): boolean => {
  const rows = dna.length;
  const cols = dna[0].length;

  for (const row of dna) {
    if (checkSequence(row)) return true;
  }

  for (let col = 0; col < cols; col++) {
    const column = dna.map((row) => row[col]).join("");
    if (checkSequence(column)) return true;
  }

  for (let row = 0; row < rows - 3; row++) {
    for (let col = 0; col < cols - 3; col++) {
      const diagonal = [0, 1, 2, 3].map((i) => dna[row + i][col + i]).join("");
      if (checkSequence(diagonal)) return true;
    }
  }

  for (let row = 0; row < rows - 3; row++) {
    for (let col = 3; col < cols; col++) {
      const diagonal = [0, 1, 2, 3].map((i) => dna[row + i][col - i]).join("");
      if (checkSequence(diagonal)) return true;
    }
  }

  return false;
};

export const hasMutationDirectionalApproach = (dna: string[]): boolean => {
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
