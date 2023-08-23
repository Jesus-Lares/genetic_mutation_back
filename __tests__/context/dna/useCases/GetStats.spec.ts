import { Sequelize } from "sequelize";

import { clearDataBase, closeDataBase, connectDBTest } from "@config/db/dbTests";
import GetStatsUseCase from "@context/dna/infra/useCases/GetStats";

import makeADNRecord from "@makesTest/recordAdn";
import verifyProperties from "@utilsTest/verifyProperties";

let db: Sequelize;
const propertiesEndpoint = ["count_mutation", "count_no_mutation", "ratio"];

beforeAll(async () => {
  db = await connectDBTest();
});
afterEach(() => clearDataBase(db));
afterAll(async () => {
  await closeDataBase(db);
});

describe("get stats", () => {
  const getStats = new GetStatsUseCase();

  describe("get stats route", () => {
    test("@GET it should return values with zeros because not exist a record ADN ", async () => {
      const result = await getStats.exec();
      verifyProperties(result, propertiesEndpoint);
      expect(result.count_no_mutation).toBe(0);
      expect(result.count_mutation).toBe(0);
      expect(result.ratio).toBe(0);
    });

    test("@GET it should return values according with the record ADN ", async () => {
      const requiredValues = { countMutation: 2, countNoMutation: 2, ratio: 0.5 };
      await makeADNRecord(requiredValues);
      const result = await getStats.exec();
      verifyProperties(result, propertiesEndpoint);
      expect(result.count_no_mutation).toBe(requiredValues.countNoMutation);
      expect(result.count_mutation).toBe(requiredValues.countMutation);
      expect(result.ratio).toBe(requiredValues.ratio);
    });
  });
});
