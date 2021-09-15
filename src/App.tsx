import "./App.css";
import Greeting from "./components/Greeting";
import { Person } from "./components/Person";

function App() {
  const person = {
    first: "ahmed",
    last: "faisal",
  };
  return (
    <div className="App">
      <Greeting name="Amit" place="React-Typescript" />
      <Person name={person} />
    </div>
  );
}

export default App;
