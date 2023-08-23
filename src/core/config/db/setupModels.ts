import { Sequelize } from "sequelize";

import { DNARecordModel, DNARecordSchema } from "@src/context/dna/domain/DnaSchema";

const setupModels = (sequelize: Sequelize) => {
  DNARecordModel.init(DNARecordSchema, DNARecordModel.config(sequelize));
};

export default setupModels;
