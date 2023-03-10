import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import Button from "./components/Button";
import Container from "./components/Container";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { List } from "./components/generics/List";
import Greet from "./components/Greet";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import { Person } from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Toast from "./components/templateLiterals/Toast";

function App() {
  const p1 = {
    fname: "harry",
    lname: "singh",
  };

  const personList = [
    { fname: "light", lname: "yagami" },
    { fname: "l", lname: "lawliet" },
  ];

  const items = ["apple", "banana", "cherry"];

  return (
    <ThemeContextProvider>
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
        <Container styles={{ backgroundColor: "red" }} />

        <Box />
      </div>

      <Private isLoggedIn={true} component={Profile} />

      <List items={personList} />

      <Toast position="center-bottom" />
    </ThemeContextProvider>
  );
}

export default App;
