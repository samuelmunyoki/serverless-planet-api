import bcrypt from "bcrypt";
export const generateSalt = async (saltRounds: number) => {
  return await bcrypt.genSalt(saltRounds);
};

export const generateHash = async (password: any, salt: any) => {
  return await bcrypt.hash(password, salt);
};
