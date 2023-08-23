import { dnaWithMutation, dnaWithoutMutation } from "@constantsTest/dna";

import Builder from "../builders/dnaRecordBuilder";

export default class DnaRecordFactory {
  static _createWithMutation() {
    const builder = new Builder();
    builder.withIsMutation(true).withSequence(dnaWithMutation);
    return builder;
  }

  static _createWithoutMutation() {
    const builder = new Builder();
    builder.withSequence(dnaWithoutMutation);
    return builder;
  }

  static createDefault(isMutation?: boolean) {
    if (isMutation) return DnaRecordFactory._createWithMutation().build();
    return DnaRecordFactory._createWithoutMutation().build();
  }
}
