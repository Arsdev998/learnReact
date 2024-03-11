import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
 
  return (
    <>
      <Navbar />
      <Outlet />
      <footer>this is footer</footer>
    </>
  );
}

export default App;
