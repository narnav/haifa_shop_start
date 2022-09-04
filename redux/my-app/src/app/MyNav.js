import React from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { selectLogged, selectIsAirLiner } from "./loginSlice";
import { useSelector } from "react-redux";

const MyNav = () => {
  const Logged = useSelector(selectLogged);
  const isAirLiner = useSelector(selectIsAirLiner);
  return (
    <div>
      <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
        <Link to="/test">test</Link>|<Link to="/MySuper">MySuper</Link>|{" "}
        {Logged ? (
          <div>
            <Link to="/login">Logout</Link> | <Link to="/MySuper">add</Link> |{" "}
            <Link to="/books">Books</Link>
          </div>
        ) : (
          <div>
            <Link to="/login">Login</Link>| <Link to="/register">Register</Link>
          </div>
        )}
        <Link to="/Categories">Categories</Link>
      </nav>
    </div>
  );
};

export default MyNav;
