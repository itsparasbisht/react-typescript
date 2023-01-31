type InputProps = {
  value: string;
};

function Input(props: InputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return <input type={"text"} value={props.value} onChange={handleChange} />;
}

export default Input;
