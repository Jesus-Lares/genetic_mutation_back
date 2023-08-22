import hasMutation from "@src/index";

import { dnaWithMutation, dnaWithoutMutation } from "@mocks/dna";

describe("Function hasMutation Tests", () => {
  it("should return true for mutation in the DNA sequence", () => {
    expect(hasMutation(dnaWithMutation)).toBe(true);
  });

  it("should return false for no mutation in the DNA sequence", () => {
    expect(hasMutation(dnaWithoutMutation)).toBe(false);
  });
});
