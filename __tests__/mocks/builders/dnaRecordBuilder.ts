import { DNA, TypeAlgorithm } from "@context/dna/domain/DNA";

export default class DNARecordBuilder {
  private dna: DNA;

  private _dna: DNA;

  constructor() {
    this._dna = {
      sequence: [],
      typeAlgorithm: "regex",
      isMutation: false,
    };
    this.dna = { ...this._dna };
  }

  withSequence(sequence: string[]): DNARecordBuilder {
    this.dna.sequence = sequence;
    return this;
  }

  withIsMutation(isMutation: boolean): DNARecordBuilder {
    this.dna.isMutation = isMutation;
    return this;
  }

  withTypeAlgorithm(typeAlgorithm: TypeAlgorithm): DNARecordBuilder {
    this.dna.typeAlgorithm = typeAlgorithm;
    return this;
  }

  reset(): DNARecordBuilder {
    this.dna = { ...this._dna };
    return this;
  }

  build(): DNA {
    return this.dna;
  }
}
