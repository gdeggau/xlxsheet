type ColumnProps = {
  children: React.ReactNode;
};

export const Column = ({ children }: ColumnProps) => {
  return <td>{children}</td>;
};
