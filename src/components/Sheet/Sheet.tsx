import { useRecoilValue } from "recoil";
import { SheetSizeState } from "../../store/SheetSizeState";
import { Cell, CELL_HEIGHT, CELL_WIDTH } from "../Cell/Cell";
import { Column } from "../Column/Column";
import { Row } from "../Row/Row";

export const Sheet = () => {
  const sheetSize = useRecoilValue(SheetSizeState);

  const numberOfColumns = sheetSize.width / CELL_WIDTH;
  const numberOfRows = sheetSize.height / CELL_HEIGHT;

  return (
    <table>
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
  );
};
