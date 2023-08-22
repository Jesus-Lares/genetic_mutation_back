import { regex } from "@constants";

export const isValidDNAStrand = (dna: string[]): boolean => {
  return dna.every((sequence) => regex.mutation.test(sequence));
};
