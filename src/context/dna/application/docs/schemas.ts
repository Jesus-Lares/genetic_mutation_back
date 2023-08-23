import { dnaWithMutation } from "@mocks/constants/dna";

const postMutationSchema = {
  type: "object",
  required: ["dna"],
  properties: {
    dna: {
      type: "array",
      description: "Secuencia de ADN.",
    },
    typeAlgorithm: {
      type: "string",
      description: "El tipo de algoritmo que se ejecutara para verificar la secuencia.",
    },
  },
  example: {
    dna: dnaWithMutation,
    typeAlgorithm: "regex",
  },
};

export default postMutationSchema;
