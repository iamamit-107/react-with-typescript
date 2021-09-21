import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export default function LoggedIn() {
  const [loggedin, setLoggedin] = useState({} as AuthUser);

  const handleLogin = () => {
    setLoggedin({
      name: "Amit",
      email: "amit@amit.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>

      <h3>Name is {loggedin.name}</h3>
      <h3>Email is {loggedin.email}</h3>
    </div>
  );
}
