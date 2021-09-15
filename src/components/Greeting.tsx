type GreetingProps = {
  name: string;
  place: string;
};

const Greeting = (props: GreetingProps) => {
  return <div>Hello {props.name}, Welcome to {props.place} world!</div>;
};

export default Greeting;
