import React from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <nav>This is Navbar</nav>
      <Outlet />
      <footer>this is footer</footer>
    </>
  );
};

export default App;
