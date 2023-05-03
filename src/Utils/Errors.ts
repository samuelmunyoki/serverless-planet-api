import { ValidationError, validate } from "class-validator";

export const ServiceValidation = async (input: any): Promise< any| false> => {
  const errors = await validate(input, {
    validationError: { target: false, value: false, whitelist: true },
  });
  const cleanErrors = [];
  if (errors.length > 0) {
    for (var i = 0; i < errors.length; i++) {
      var err = Object.values(errors[i].constraints);
      cleanErrors.push(err);
    }
    return cleanErrors;
  } else false;
};
