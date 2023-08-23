import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

import { postMutationSchema, dnaRoutes } from "@context/dna/application/docs";

import env from "./env";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "Documentacion de la API",
    version: "1.0.0",
    description: "Proyecto de detección de diferencias genéticas en secuencia de ADN.",
  },
  servers: [
    {
      url: env.serverUrl,
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      postMutation: postMutationSchema,
    },
  },
  paths: {
    ...dnaRoutes,
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/*.ts"],
};

export default swaggerJSDoc(swaggerOptions);
