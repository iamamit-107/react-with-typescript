import "./App.css";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import NestComponent from "./components/NestComponent";

function App() {
  return (
    <div className="App">
      <Header>This is header</Header>

      {/* Pass a component to a component */}
      <NestComponent>
        <Header>
          This is a nesting component passed using typescript types
        </Header>
      </NestComponent>

      {/* Passing only required props and avoid optional props */}
      <Greeting name="Amit" />
    </div>
  );
}

export default App;
