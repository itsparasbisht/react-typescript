type GreetProps = {
  name: string;
  messageCount?: number;
};

function Greet(props: GreetProps) {
  const { messageCount = 0 } = props;

  return (
    <div>
      <h1>
        Welcome {props.name}! You have {messageCount} unread messages
      </h1>
    </div>
  );
}

export default Greet;
