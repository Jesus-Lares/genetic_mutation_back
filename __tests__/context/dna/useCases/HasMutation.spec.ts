import HasMutationUseCase from "@context/dna/infra/useCases/HasMutation";
import { ErrorData } from "@errors/customErrors";

import { dnaWithMutation, dnaWithoutMutation } from "@mocks/dna";

describe("Function hasMutation Tests", () => {
  const HasMutation = new HasMutationUseCase();
  it("@USE_CASE should return true for mutation in the DNA sequence", () => {
    const result = HasMutation.exec(dnaWithMutation);
    expect(result).toBe(true);
  });

  it("@USE_CASE should return false for no mutation in the DNA sequence", () => {
    const result = HasMutation.exec(dnaWithoutMutation);
    expect(result).toBe(false);
  });

  it("@USE_CASE it should return an error message with the required parameters", () => {
    expect(() => HasMutation.exec([])).toThrow(ErrorData);
    expect(() => HasMutation.exec(["ABCD"])).toThrow(ErrorData);
  });
});
