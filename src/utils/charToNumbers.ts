import { ASCII_CODE_LOWERCASE_A, TOTAL_LETTERS_ALPHABET } from "../consts";

export const charToNumber = (letters: string) =>
  letters
    // Get each letter on its own
    .split("")
    // Smaller first and then bigger
    .reverse()
    // Convert them to base 26 numbers
    .map((letter, index) =>
      index === 0
        ? letter.toLowerCase().charCodeAt(0) - ASCII_CODE_LOWERCASE_A
        : // The addition of 1 here is to oppose what we did for numberToLetter
          letter.toLowerCase().charCodeAt(0) - ASCII_CODE_LOWERCASE_A + 1
    )
    // Convert base 26 to base 10
    .map(
      (base26Number, position) =>
        base26Number * TOTAL_LETTERS_ALPHABET ** position
    )
    // Sum
    .reduce((sum: number, number: number) => sum + number, 0);
