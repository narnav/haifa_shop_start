import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  doSigninAsync,
  selectEmail,
  selectUserName,
  logout,
  selectToken,
} from "./loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const userName = useSelector(selectUserName);
  const token = useSelector(selectToken);

  const [username, setmyUserName] = useState("");
  const [password, setmypwd] = useState("");
  return (
    <div>
      {userName && <div>User name: {userName}</div>}
      {email && <div> Email: {email}</div>}
      {token && <div> token: {token}</div>}
      <hr />
      Login
      <button onClick={() => dispatch(doSigninAsync({ username, password }))}>
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
      Username:
      <input onChange={(e) => setmyUserName(e.target.value)} />
      password:
      <input onChange={(e) => setmypwd(e.target.value)} />
    </div>
  );
};

export default Login;
