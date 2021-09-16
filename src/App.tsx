import "./App.css";
import Button from "./components/Button";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Input from "./components/Input";
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

      {/* Passing a function using types */}
      <Button
        handleButton={(e, id) => console.log(`Button clicked id:${id}`)}
      />

      <Input value="" onChange={(e) => console.log(e)} />
    </div>
  );
}

export default App;
