import { RecoilRoot } from "recoil";
import { Cell } from "./components/Cell/Cell";
import { SheetsContainer } from "./containers/SheetsContainer";

function App() {
  return (
    <RecoilRoot>
      <SheetsContainer>
        <Cell>Hello</Cell>
      </SheetsContainer>
    </RecoilRoot>
  );
}

export default App;
