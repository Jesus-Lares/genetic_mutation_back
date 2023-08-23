export type TypeAlgorithm = "directionalApproach" | "regex";

export interface DNA {
  id?: number;
  sequence: string[];
  isMutation: boolean;
  typeAlgorithm: TypeAlgorithm;
  createdAt?: Date;
  updatedAt?: Date;
}
