import { Model, DataTypes, Sequelize } from "sequelize";

export const DNA_RECORD_TABLE = "dnaRecord";

export const DNARecordSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  sequence: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  isMutation: {
    type: DataTypes.BOOLEAN,
    field: "is_mutation",
    allowNull: false,
  },
  typeAlgorithm: {
    type: DataTypes.STRING,
    field: "type_algorithm",
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "update_at",
    defaultValue: DataTypes.NOW,
  },
};

export class DNARecordModel extends Model {
  static associate() {}

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: DNA_RECORD_TABLE,
      modelName: "DNARecord",
      timestamps: true,
      indexes: [
        {
          unique: false,
          fields: ["is_mutation"],
        },
        {
          unique: false,
          fields: ["type_algorithm"],
        },
      ],
    };
  }
}
