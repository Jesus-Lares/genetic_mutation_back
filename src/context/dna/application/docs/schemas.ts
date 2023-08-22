import { dnaWithMutation } from "@mocks/dna";

export const postMutationSchema = {
  type: "object",
  required: ["dna"],
  properties: {
    dna: {
      type: "array",
      description: "Secuencia de ADN.",
    },
  },
  example: {
    dna: dnaWithMutation,
  },
};
