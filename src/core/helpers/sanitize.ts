/* eslint-disable no-control-regex */
/* eslint-disable no-useless-escape */
/* eslint-disable no-restricted-syntax */
const sanitizeString = (input: string) => input.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, "");

const sanitizeArray = (inputArray: string[]) => inputArray.map((item) => sanitizeString(item));

const sanitizeInput = (input: any) => {
  if (Array.isArray(input)) {
    return sanitizeArray(input);
  }
  if (typeof input === "string") {
    return sanitizeString(input);
  }
  if (typeof input === "object") {
    const sanitizedObject: { [key: string]: any } = {};
    for (const key in input) {
      if (Object.prototype.hasOwnProperty.call(input, key)) {
        sanitizedObject[key] = sanitizeInput(input[key]);
      }
    }
    return sanitizedObject;
  }
  return input;
};

export default sanitizeInput;
