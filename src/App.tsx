import { RecoilRoot } from "recoil";
import { Cell } from "./components/Cell/Cell";
import { SheetsContainer } from "./containers/SheetsContainer";

function App() {
  return (
    <RecoilRoot>
      <SheetsContainer></SheetsContainer>
    </RecoilRoot>
  );
}

export default App;
