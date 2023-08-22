export const requestIdInPath = (message: string) => ({
  in: "path",
  name: "id",
  schema: {
    type: "string",
  },
  required: true,
  description: message,
});

export const responseObjectCreate = (typeComponent: string) => ({
  content: {
    "application/json": {
      schema: {
        type: "object",
        $ref: `#/components/schemas/${typeComponent}`,
      },
    },
  },
});

export const generateMessageSchema = (example: object) => ({
  type: "object",
  properties: {
    message: {
      type: "string",
      description: "Explicación de la respuesta del endpoint.",
    },
  },
  example,
});
