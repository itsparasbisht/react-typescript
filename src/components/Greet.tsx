type GreetProps = {
  name: string;
  messageCount: number;
};

function Greet(props: GreetProps) {
  return (
    <div>
      <h1>
        Welcome {props.name}! You have {props.messageCount} unread messages
      </h1>
    </div>
  );
}

export default Greet;
