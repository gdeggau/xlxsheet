import { ASCII_CODE_LOWERCASE_A, TOTAL_LETTERS_ALPHABET } from "../consts";

export const numberToChar = (num: number): string => {
  const division = Math.floor(num / TOTAL_LETTERS_ALPHABET);
  const reminder = Math.floor(num % TOTAL_LETTERS_ALPHABET);

  // 0 = A, 1 = B, 2 = C...
  const char = String.fromCharCode(
    reminder + ASCII_CODE_LOWERCASE_A
  ).toUpperCase();

  return division - 1 >= 0 ? numberToChar(division - 1) + char : char;
};
