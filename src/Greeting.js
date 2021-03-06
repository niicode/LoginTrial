import React from "react";

function UserGreeting(props) {
  return (
    <div>
      <h1>Welcome back you are signed in!</h1>
    </div>
  );
}

function GuestGreeting(props) {
  return <h1>Hey you have to sign in</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
export default Greeting;
