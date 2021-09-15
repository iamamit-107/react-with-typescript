import "./App.css";
import Greeting from "./components/Greeting";
import { Person } from "./components/Person";
import { PersonLists } from "./components/PersonLists";

function App() {
  const person = {
    first: "ahmed",
    last: "faisal",
  };

  const personLists = [
    {
      first: "ahmed1",
      last: "faisal1",
    },
    {
      first: "ahmed2",
      last: "faisal2",
    },
    {
      first: "ahmed3",
      last: "faisal3",
    },
  ];
  return (
    <div className="App">
      <Greeting name="Amit" place="React-Typescript" />
      <Person name={person} />
      <PersonLists name={personLists} />
    </div>
  );
}

export default App;
