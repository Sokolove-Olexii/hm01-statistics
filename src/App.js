import Statistics from "./Statistics";
import data from "./data.json";

function App() {
  return (
    <>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </>
  );
}

export default App;
