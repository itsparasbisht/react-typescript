type InputProps = {
  value: string;
};

function Input({ value }: InputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return <input type={"text"} value={value} onChange={handleChange} />;
}

export default Input;
