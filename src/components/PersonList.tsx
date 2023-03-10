import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map((name) => (
        <h1 key={name.fname}>
          {name.fname} {name.lname}
        </h1>
      ))}
    </div>
  );
}

export default PersonList;
