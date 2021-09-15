type GreetingProps = {
  name: string;
  place?: string;
};

// by using ? mark we make this props optional
const Greeting = (props: GreetingProps) => {
  const { place = "Optional Typescript" } = props;
  return (
    <div>
      Hello {props.name}, Welcome to {place} world!
    </div>
  );
};

export default Greeting;
