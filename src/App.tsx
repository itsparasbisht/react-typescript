import Greet from "./components/Greet";
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
      <Greet name="harry" messageCount={10} />
      <Person name={p1} />
      <PersonList names={personList} />
      <Status status="loading" />
      <Oscar>
        <h2>Welcome!</h2>
      </Oscar>
    </div>
  );
}

export default App;
