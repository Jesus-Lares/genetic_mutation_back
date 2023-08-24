/* eslint-disable import/prefer-default-export */
import { regex } from "@constants";

export const isValidDNAStrand = (dna: string[]): boolean =>
  dna.every((sequence) => regex.mutation.test(sequence));
