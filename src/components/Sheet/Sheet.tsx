import { useRecoilValue } from "recoil";
import { SheetSizeState } from "../../store/SheetSizeState";
import { Cell, CELL_HEIGHT, CELL_WIDTH } from "../Cell/Cell";
import { Column } from "../Column/Column";
import { Resizer } from "../Resizer/Resizer";
import { Row } from "../Row/Row";
import styles from "./Sheet.module.css";

export const Sheet = () => {
  const sheetSize = useRecoilValue(SheetSizeState);

  const numberOfColumns = Math.ceil(sheetSize.width / CELL_WIDTH);
  const numberOfRows = Math.ceil(sheetSize.height / CELL_HEIGHT);

  return (
    <div className={styles.sheetWrapper}>
      <table className={styles.sheet}>
        <tbody>
          {[...Array(numberOfRows)].map((row, rowIndex) => (
            <Row key={rowIndex}>
              {[...Array(numberOfColumns)].map((column, columnIndex) => (
                <Column key={columnIndex}>
                  <Cell cellId={`${rowIndex}-${columnIndex}`} />
                </Column>
              ))}
            </Row>
          ))}
        </tbody>
      </table>
      <Resizer />
    </div>
  );
};
