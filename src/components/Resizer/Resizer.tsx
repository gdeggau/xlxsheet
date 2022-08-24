import { useRecoilState } from "recoil";
import { SheetSizeState } from "../../store/SheetSizeState";
import styles from "./Resizer.module.css";

export const Resizer = () => {
  const [, setSheetSize] = useRecoilState(SheetSizeState);

  const initDrag = () => {
    document.addEventListener("mousemove", doDrag);
    document.addEventListener("mouseup", stopDrag);
  };

  const doDrag = (event: MouseEvent) => {
    const pointerX = event.pageX;
    const pointerY = event.pageY;

    setSheetSize({
      width: pointerX,
      height: pointerY,
    });
  };

  const stopDrag = () => {
    document.removeEventListener("mousemove", doDrag);
    document.removeEventListener("mouseup", stopDrag);
  };

  return <div onMouseDown={initDrag} className={styles.resizer}></div>;
};
