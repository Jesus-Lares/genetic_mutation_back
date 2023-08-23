/* eslint-disable quotes */
import request from "supertest";
import { Sequelize } from "sequelize";

import app from "@src/app";
import server from "@src/index";
import { clearDataBase, closeDataBase, connectDBTest } from "@config/db/dbTests";

import makeADNRecord from "@makesTest/recordAdn";
import verifyProperties from "@tests/utils/verifyProperties";

const URL_BASE = "/api/v1/stats";
const propertiesEndpoint = ["count_mutation", "count_no_mutation", "ratio"];
let agent: request.SuperAgentTest;
let db: Sequelize;

beforeAll(async () => {
  agent = request.agent(app);
  db = await connectDBTest();
});
afterEach(() => clearDataBase(db));
afterAll(async () => {
  await closeDataBase(db);
  await server.close();
});

describe("get stats route", () => {
  test(`@GET ${URL_BASE} it should return values with zeros because not exist a record ADN `, async () => {
    const { body: result } = await agent.get(URL_BASE).expect(200);
    verifyProperties(result, propertiesEndpoint);
    expect(result.count_no_mutation).toBe(0);
    expect(result.count_mutation).toBe(0);
    expect(result.ratio).toBe(0);
  });

  test(`@GET ${URL_BASE} it should return values according with the record ADN `, async () => {
    const requiredValues = { countMutation: 2, countNoMutation: 2, ratio: 0.5 };
    await makeADNRecord(requiredValues);
    const { body: result } = await agent.get(URL_BASE).expect(200);
    verifyProperties(result, propertiesEndpoint);
    expect(result.count_no_mutation).toBe(requiredValues.countNoMutation);
    expect(result.count_mutation).toBe(requiredValues.countMutation);
    expect(result.ratio).toBe(requiredValues.ratio);
  });
});
