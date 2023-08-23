import { ID, Repository } from "@types";
import sequelize from "@config/db";

import { DNA } from "../domain/DNA";
import { DNARecordModel } from "../domain/DnaSchema";

export default class DNARepository implements Repository<DNARecordModel, DNA> {
  private schema: typeof DNARecordModel | null = null;

  private async initializeSchema(): Promise<void> {
    const { models } = await sequelize();
    this.schema = models.DNARecord as typeof DNARecordModel;
  }

  private async getSchema(): Promise<typeof DNARecordModel> {
    if (!this.schema) {
      await this.initializeSchema();
    }
    return this.schema!;
  }

  async create(item: DNA): Promise<DNARecordModel> {
    const schema = await this.getSchema();
    return schema.create({ ...item });
  }

  async count(query: object): Promise<number> {
    const schema = await this.getSchema();
    return schema.count(query);
  }

  async find(query: object): Promise<DNARecordModel[]> {
    const schema = await this.getSchema();
    return schema.findAll({ ...query, raw: true });
  }

  async findOne(query: object): Promise<DNARecordModel | null> {
    const schema = await this.getSchema();
    return schema.findOne({ where: { ...query } });
  }

  async findById(id: ID): Promise<DNARecordModel | null> {
    return this.findOne({ id });
  }

  async update(id: number, item: object): Promise<DNARecordModel | null> {
    const dna = await this.findById(id);
    if (!dna) return null;
    return dna.update({ ...item });
  }

  async delete(id: ID): Promise<number | null> {
    const schema = await this.getSchema();
    return schema.destroy({ where: { id } });
  }
}
