import { Cell } from "../Cell/Cell";
import { Column } from "../Column/Column";
import { Row } from "../Row/Row";

export const Sheet = () => {
  return (
    <table>
      <tbody>
        <Row>
          <Column>
            <Cell />
          </Column>
          <Column>
            <Cell />
          </Column>
          <Column>
            <Cell />
          </Column>
        </Row>
      </tbody>
    </table>
  );
};
