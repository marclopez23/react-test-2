import { data } from "./data/data";
import Main from "./views/Main";
import "./App.css";

function App() {
  return (
    <>
      <Main data={data} />
    </>
  );
}

export default App;
