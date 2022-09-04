import React from "react";
import "./App.css";
import Login from "./app/Login";
import { useSelector } from "react-redux";
import { selectUserName } from "./app/loginSlice";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Note from "./Note";
import MyNav from "./app/MyNav";

function App() {
  const userName = useSelector(selectUserName);
  return (
    <div className="App">
      <MyNav></MyNav>
      <header className="App-header">
        <Outlet />
        {userName && <div>Hello {userName}</div>}
      </header>
    </div>
  );
}

export default App;
