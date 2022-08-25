import styles from "./AxisCell.module.css";

type AxisCellProps = {
  children?: React.ReactNode;
};

export const AxisCell = ({ children }: AxisCellProps) => {
  return <th className={styles.axisCell}>{children}</th>;
};
