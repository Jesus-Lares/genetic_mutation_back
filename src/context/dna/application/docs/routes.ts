import env from "@config/env";

import { responseObjectCreate, generateMessageSchema } from "@utils/documentation";
import { INTERNAL_ERROR, INVALID_DATA } from "@errors/messages";

import { HAS_MUTATION, NOT_HAS_MUTATION } from "../../infra/constants/messageResponse";

const dnaRoutes = {
  [`${env.initialRoute}/mutation`]: {
    post: {
      summary: "Verifica si tienes mutación en la secuencia de ADN",
      tags: ["dna"],
      requestBody: {
        required: true,
        ...responseObjectCreate("postMutation"),
      },
      responses: {
        200: {
          description: "Retorna status 200 si tiene una mutación en la secuencia de ADN.",
          content: {
            "application/json": {
              schema: {
                ...generateMessageSchema({ message: HAS_MUTATION }),
              },
            },
          },
        },
        403: {
          description: "Retorna status 403 si no tiene una mutación en la secuencia de ADN.",
          content: {
            "application/json": {
              schema: {
                ...generateMessageSchema({ message: NOT_HAS_MUTATION }),
              },
            },
          },
        },
        400: {
          description: "Retorna status 400 si la petición es solicitada de manera incorrecta.",
          content: {
            "application/json": {
              schema: {
                ...generateMessageSchema({ message: INVALID_DATA }),
              },
            },
          },
        },
      },
    },
  },
  [`${env.initialRoute}/stats`]: {
    get: {
      summary:
        "Obtiene las estadisticas acerca de cuantas secuencias de ADN tienen mutación y el porcentaje",
      tags: ["dna"],
      parameters: [
        {
          in: "query",
          name: "typeAlgorithm",
          schema: { type: "string" },
          description: "Tipo de algoritmo (regex, directionalApproach)",
        },
      ],
      responses: {
        200: {
          description:
            "Retorna las estadisticas con los datos count_mutation, count_no_mutation y ratio.",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  count_mutation: {
                    type: "number",
                    description: "Número de secuencias con mutación.",
                  },
                  count_no_mutation: {
                    type: "number",
                    description: "Número de secuencias sin mutación.",
                  },
                  ratio: {
                    type: "number",
                    description: "Porcentaje.",
                  },
                },
                example: {
                  count_mutations: 1,
                  count_no_mutation: 1,
                  ratio: 0.5,
                },
              },
            },
          },
        },
        500: {
          description: "Retorna status 500 si la petición contiene algun error.",
          content: {
            "application/json": {
              schema: {
                ...generateMessageSchema({ message: INTERNAL_ERROR }),
              },
            },
          },
        },
      },
    },
  },
};

export default dnaRoutes;
