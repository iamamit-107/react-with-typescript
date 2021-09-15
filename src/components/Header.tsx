type HeaderProps = {
  children: string;
};

export default function Header(props: HeaderProps) {
  return <div>{props.children}</div>;
}
