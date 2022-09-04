import React from "react";
import { selectLogged } from "./loginSlice";
import { useSelector } from "react-redux";

const MyTest = () => {
  const Logged = useSelector(selectLogged);

  return (
    <div style={{ backgroundColor: "red" }}>
      {Logged ? "u r logged" : "u must login"}
      <br></br>
      <hr></hr>
      MyTest
    </div>
  );
};

export default MyTest;
