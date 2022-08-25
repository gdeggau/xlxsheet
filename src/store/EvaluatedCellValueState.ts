import { evaluate } from "mathjs";
import { selector } from "recoil";
import { memoize } from "../utils/memoize";
import { CellValueState } from "./CellValueState";

export const EvaluatedCellValueState = (cellId: string) =>
  memoize(`evaluatedCell_${cellId}`, () =>
    selector({
      key: `evaluatedCell_${cellId}`,
      get: ({ get }) => {
        const value = get(CellValueState(cellId));

        if (value.startsWith("=")) {
          try {
            return evaluate(value.slice(1));
          } catch (error) {
            return value;
          }
        }

        return value;
      },
    })
  );
