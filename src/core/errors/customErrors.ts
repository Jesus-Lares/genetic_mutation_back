import { ErrorParams } from "../types";

// eslint-disable-next-line func-names
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
export const ErrorDefault = errorFactory("ErrorDefault");
