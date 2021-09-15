type NestProp = {
  children: React.ReactNode;
};

export default function NestComponent(props: NestProp) {
  return <div>{props.children}</div>;
}
