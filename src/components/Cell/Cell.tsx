import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { CellValueState } from "../../store/CellValueState";

type CellProps = {
  children: React.ReactNode | string;
};

export const Cell = ({ children }: CellProps) => {
  const [cellValue, setCellValue] = useRecoilState(CellValueState);
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
    if ((e.target as HTMLElement)?.dataset?.cellId !== "2") {
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
      data-cell-id="2"
      value={cellValue}
      onChange={updateCellValueState}
    />
  ) : (
    <div data-cell-id="2" onClick={changeLabelToInput}>
      {cellValue}
    </div>
  );
};
