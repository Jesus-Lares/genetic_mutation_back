import { areCoordinatesValid, hasMutationInDirection } from "@src/context/dna/infra/utils";

import { dnaWithMutation } from "@mocks/dna";

describe("Utils Tests", () => {
  describe("areCoordinatesValid", () => {
    const lengthDna = 5;

    it("should return true for valid coordinates", () => {
      expect(areCoordinatesValid({ x: 0, y: 0, n: lengthDna })).toBe(true);
      expect(areCoordinatesValid({ x: 2, y: 3, n: lengthDna })).toBe(true);
      expect(areCoordinatesValid({ x: 4, y: 4, n: lengthDna })).toBe(true);
    });

    it("should return false for invalid coordinates", () => {
      expect(areCoordinatesValid({ x: -1, y: 2, n: lengthDna })).toBe(false);
      expect(areCoordinatesValid({ x: 2, y: -1, n: lengthDna })).toBe(false);
      expect(areCoordinatesValid({ x: 5, y: 5, n: lengthDna })).toBe(false);
    });
  });

  describe("hasMutationInDirection", () => {
    const dna = dnaWithMutation;

    it("should return true for mutations in direction", () => {
      expect(hasMutationInDirection({ dna, x: 0, y: 0, dx: 1, dy: 1 })).toBe(true);
      expect(hasMutationInDirection({ dna, x: 4, y: 0, dx: 0, dy: 1 })).toBe(true);
      expect(hasMutationInDirection({ dna, x: 0, y: 4, dx: 1, dy: 0 })).toBe(true);
    });

    it("should return false for no mutations in direction", () => {
      expect(hasMutationInDirection({ dna, x: 0, y: 0, dx: 1, dy: 0 })).toBe(false);
      expect(hasMutationInDirection({ dna, x: 3, y: 2, dx: 1, dy: 0 })).toBe(false);
      expect(hasMutationInDirection({ dna, x: 0, y: 5, dx: 0, dy: 1 })).toBe(false);
    });
  });
});
