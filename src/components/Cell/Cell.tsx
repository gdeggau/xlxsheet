import { useEffect, useRef, useState } from "react";

type CellProps = {
  children: React.ReactNode | string;
};

export const Cell = ({ children }: CellProps) => {
  const [isEditMode, setIdEditMode] = useState(false);
  const inputRef = useRef(null);

  const changeLabelToInput = () => {
    setIdEditMode(true);
  };

  const changeInputToLabel = () => {
    setIdEditMode(false);
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
    <input ref={inputRef} data-cell-id="2" />
  ) : (
    <div data-cell-id="2" onClick={changeLabelToInput}>
      {children}
    </div>
  );
};
