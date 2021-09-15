type PersonLists = {
  name: { first: string; last: string }[];
};

export const PersonLists = (props: PersonLists) => {
  return (
    <div>
      {props.name.map((n) => (
        <div>
          {n.first} {n.last}
        </div>
      ))}
    </div>
  );
};
