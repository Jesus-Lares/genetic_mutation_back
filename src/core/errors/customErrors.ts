import { ErrorParams } from "../types";

const errorFactory = function (name: string) {
  return class BusinessError extends Error {
    code: number;

    constructor({ message, code }: ErrorParams) {
      super(message);
      this.code = code;
      this.name = name;
    }
  };
};

export const ErrorData = errorFactory("ErrorData");
