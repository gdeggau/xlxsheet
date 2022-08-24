type RowProps = {
  children: React.ReactNode;
};

export const Row = ({ children }: RowProps) => {
  return <tr>{children}</tr>;
};
