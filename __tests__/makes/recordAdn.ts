/* eslint-disable no-await-in-loop */
import CreateAdnRecordUseCase from "@context/dna/infra/useCases/CreateAdnRecord";
import { DNA } from "@context/dna/domain/DNA";

import DnaRecordFactory from "@factories/dnaRecordFactory";

const create = async (mock: DNA, times: number) => {
  const createAdnRecord = new CreateAdnRecordUseCase();
  for (let i = 0; i < times; i++) {
    await createAdnRecord.exec(mock);
  }
};

const makeADNRecord = async ({
  countMutation = 0,
  countNoMutation = 0,
}: {
  countMutation?: number;
  countNoMutation?: number;
}) => {
  const mockWithMutation = DnaRecordFactory.createDefault(true);
  const mockWithoutMutation = DnaRecordFactory.createDefault();
  await create(mockWithMutation, countMutation);
  await create(mockWithoutMutation, countNoMutation);
};

export default makeADNRecord;
