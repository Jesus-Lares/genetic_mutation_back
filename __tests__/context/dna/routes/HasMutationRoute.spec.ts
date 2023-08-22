/* eslint-disable quotes */
import request from "supertest";

import app from "@src/app";
import server from "@src/index";
import { INVALID_DATA } from "@src/core/errors/messages";

import { HAS_MUTATION, NOT_HAS_MUTATION } from "@src/context/dna/infra/constants/messageResponse";

import { dnaWithMutation, dnaWithoutMutation, wrongDna } from "@mocks/dna";

const URL_BASE = "/api/v1/mutation";
let agent: request.SuperAgentTest;

beforeAll(() => {
  agent = request.agent(app);
});
afterAll(async () => {
  await server.close();
});

describe("has mutation route", () => {
  test(`@POST ${URL_BASE} it should return status 200 for mutation in the DNA sequence `, async () => {
    const body = { dna: dnaWithMutation };
    const { body: result } = await agent.post(URL_BASE).send(body).expect(200);
    expect(result).toHaveProperty("message");
    expect(result.message).toBe(HAS_MUTATION);
  });

  test(`@POST ${URL_BASE} it should return status 403 for no mutation in the DNA sequence `, async () => {
    const body = { dna: dnaWithoutMutation };
    const { body: result } = await agent.post(URL_BASE).send(body).expect(403);
    expect(result).toHaveProperty("message");
    expect(result.message).toBe(NOT_HAS_MUTATION);
  });

  test(`@POST ${URL_BASE} it should return an error message with the required parameters`, async () => {
    const requireParams = { body: ['"dna" is required'] };
    const response = await agent.post(URL_BASE).send({}).expect(400);
    expect(response.body).toEqual(requireParams);
  });

  test(`@POST ${URL_BASE} it should return an error message with the required parameters`, async () => {
    const body = { dna: wrongDna };
    const { body: result } = await agent.post(URL_BASE).send(body).expect(400);
    expect(result).toHaveProperty("message");
    expect(result.message).toBe(INVALID_DATA);
  });
});
