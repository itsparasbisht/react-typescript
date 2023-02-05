import { PersonProps } from "./Person.types";

export const Person = ({ name }: PersonProps) => {
  return (
    <div>
      <h1>
        {name.fname} {name.lname}
      </h1>
    </div>
  );
};
