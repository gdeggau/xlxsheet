import { useRecoilValue } from "recoil";
import { SheetSizeState } from "../../store/SheetSizeState";
import { numberToChar } from "../../utils/numberToChar";
import { AxisCell } from "../AxisCell/AxisCell";
import { buildCellId, Cell, CELL_HEIGHT, CELL_WIDTH } from "../Cell/Cell";
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
          <Row>
            {[...Array(numberOfColumns + 1)].map((_, columnIndex) =>
              columnIndex !== 0 ? (
                <AxisCell key={columnIndex}>
                  {numberToChar(columnIndex - 1)}
                </AxisCell>
              ) : (
                <AxisCell />
              )
            )}
          </Row>
          {[...Array(numberOfRows)].map((_, rowIndex) => (
            <Row key={rowIndex}>
              <AxisCell>{rowIndex + 1}</AxisCell>
              {[...Array(numberOfColumns)].map((_, columnIndex) => (
                <Column key={columnIndex}>
                  <Cell cellId={buildCellId({ columnIndex, rowIndex })} />
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
