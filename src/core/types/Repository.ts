import { ID } from "./Shared";

export interface Repository<Model, Item> {
  create(item: Item): Promise<Model>;
  find(query: object): Promise<Model[]>;
  findOne(query: object): Promise<Model | null>;
  findById(id: ID): Promise<Model | null>;
  update(id: ID, item: Item): Promise<Model | null>;
  delete(id: ID): Promise<Number | null>;
}
