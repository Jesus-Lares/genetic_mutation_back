import { Sequelize } from "sequelize";
import HasMutationUseCase from "@context/dna/infra/useCases/HasMutation";
import { clearDataBase, closeDataBase, connectDBTest } from "@config/db/dbTests";
import { ErrorData } from "@errors/customErrors";

import { dnaWithMutation, dnaWithoutMutation } from "@mocks/constants/dna";

let db: Sequelize;

beforeAll(async () => {
  db = await connectDBTest();
});
afterEach(() => clearDataBase(db));
afterAll(async () => {
  await closeDataBase(db);
});

describe("Function hasMutation Tests", () => {
  const HasMutation = new HasMutationUseCase();
  it("@USE_CASE should return true for mutation in the DNA sequence", async () => {
    const result = await HasMutation.exec({ dna: dnaWithMutation });
    expect(result).toBe(true);
  });

  it("@USE_CASE should return false for no mutation in the DNA sequence", async () => {
    const result = await HasMutation.exec({ dna: dnaWithoutMutation });
    expect(result).toBe(false);
  });

  it("@USE_CASE it should return an error message with the required parameters", async () => {
    await expect(() => HasMutation.exec({ dna: [] })).rejects.toThrow(ErrorData);
    await expect(() => HasMutation.exec({ dna: ["ABCD"] })).rejects.toThrow(ErrorData);
  });
});
