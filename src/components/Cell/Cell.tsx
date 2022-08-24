import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { CellValueState } from "../../store/CellValueState";

export const CELL_WIDTH = 100;
export const CELL_HEIGHT = 25;

type CellProps = {
  cellId: string;
  children?: React.ReactNode;
};

export const Cell = ({ children, cellId }: CellProps) => {
  const [cellValue, setCellValue] = useRecoilState(CellValueState(cellId));
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
      data-cell-id={cellId}
      value={cellValue}
      onChange={updateCellValueState}
    />
  ) : (
    <div data-cell-id={cellId} onClick={changeLabelToInput}>
      {cellValue}
    </div>
  );
};
