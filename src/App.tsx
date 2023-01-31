import Button from "./components/Button";
import Greet from "./components/Greet";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import { Person } from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const p1 = {
    fname: "harry",
    lname: "singh",
  };

  const personList = [
    { fname: "light", lname: "yagami" },
    { fname: "l", lname: "lawliet" },
  ];

  return (
    <div className="App">
      <Greet name="harry" />
      <Person name={p1} />
      <PersonList names={personList} />
      <Status status="loading" />
      <Oscar>
        <h2>Welcome!</h2>
      </Oscar>
      <Button
        handleClick={(event, id) => console.log("Button clicked", event, id)}
      ></Button>
      <Input value="" />
    </div>
  );
}

export default App;
