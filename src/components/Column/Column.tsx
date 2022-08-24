import styles from "./Column.module.css";

type ColumnProps = {
  children: React.ReactNode;
};

export const Column = ({ children }: ColumnProps) => {
  return <td className={styles.column}>{children}</td>;
};
