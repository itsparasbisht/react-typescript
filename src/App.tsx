import Greet from "./components/Greet";
import { Person } from "./components/Person";
import PersonList from "./components/PersonList";

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
    </div>
  );
}

export default App;
