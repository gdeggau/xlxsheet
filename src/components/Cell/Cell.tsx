import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { CellValueState } from "../../store/CellValueState";
import { EvaluatedCellValueState } from "../../store/EvaluatedCellValueState";
import styles from "./Cell.module.css";

export const CELL_WIDTH = 100;
export const CELL_HEIGHT = 25;

type BuildCellId = {
  rowIndex: number;
  columnIndex: number;
};

export const buildCellId = ({ columnIndex, rowIndex }: BuildCellId) => {
  return `${rowIndex},${columnIndex}`;
};

type CellProps = {
  cellId: string;
};

export const Cell = ({ cellId }: CellProps) => {
  const [cellValue, setCellValue] = useRecoilState(CellValueState(cellId));
  const evaluatedCellValueState = useRecoilValue(
    EvaluatedCellValueState(cellId)
  );
  const [isEditMode, setIdEditMode] = useState(false);
  const inputRef = useRef(null);

  const changeLabelToInput = () => {
    setIdEditMode(true);
  };

  const changeInputToLabel = () => {
    setIdEditMode(false);
  };

  const updateCellValueState = (e: ChangeEvent<HTMLInputElement>) => {
    setCellValue(e.target.value);
  };

  const onClickOutsideInputHandler = (e: MouseEvent) => {
    if ((e.target as HTMLElement)?.dataset?.cellId !== cellId) {
      changeInputToLabel();
    }
  };

  useEffect(() => {
    document.addEventListener("click", onClickOutsideInputHandler);
    return () => {
      document.removeEventListener("click", onClickOutsideInputHandler);
    };
  }, []);

  return isEditMode ? (
    <input
      ref={inputRef}
      className={styles.cellInput}
      data-cell-id={cellId}
      value={cellValue}
      onChange={updateCellValueState}
    />
  ) : (
    <div
      data-cell-id={cellId}
      className={styles.cellLabel}
      onClick={changeLabelToInput}
    >
      {evaluatedCellValueState}
    </div>
  );
};
