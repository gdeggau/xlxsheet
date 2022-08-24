import { Sheet } from "../components/Sheet/Sheet";

type SheetsContainerProps = {
  children: React.ReactNode;
};

export const SheetsContainer = ({ children }: SheetsContainerProps) => {
  return <Sheet />;
};
