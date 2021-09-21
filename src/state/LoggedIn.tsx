import { useState } from "react";

export default function LoggedIn() {
  const [loggedin, setLoggedin] = useState(false);

  const handleLogin = () => {
    setLoggedin(true);
  };
  const handleLogout = () => {
    setLoggedin(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      <h3>User is {loggedin ? `logged in` : `Logged out`}</h3>
    </div>
  );
}
