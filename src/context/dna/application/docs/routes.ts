import env from "@config/env";

import { responseObjectCreate, generateMessageSchema } from "@utils/documentation";
import { INVALID_DATA } from "@errors/messages";

import { HAS_MUTATION, NOT_HAS_MUTATION } from "../../infra/constants/messageResponse";

export const dnaRoutes = {
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
};
