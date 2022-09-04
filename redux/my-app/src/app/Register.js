import React, { useState } from "react";
import { selectLogged, doSignUpAsync } from "./loginSlice";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [avatar, setAvatar] = useState("");
  const [address, setAddress] = useState("");
  const [isAirLiner, setIsAirLiner] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      {isAirLiner && "true"}
      Register UserName:
      <input onChange={(e) => setuserName(e.target.value)} />
      email:
      <input onChange={(e) => setEmail(e.target.value)} />
      pwd:
      <input type={"password"} onChange={(e) => setPwd(e.target.value)} />
      avatar:
      <input onChange={(e) => setAvatar(e.target.value)} />
      address:
      <input onChange={(e) => setAddress(e.target.value)} />
      Is air liner{" "}
      <input
        type={"checkbox"}
        onChange={(e) => setIsAirLiner(e.target.checked)}
      ></input>
      <button
        onClick={() =>
          dispatch(
            doSignUpAsync({ userName, email, pwd, avatar, address, isAirLiner })
          )
        }
      >
        Sign up
      </button>
    </div>
  );
};

export default Register;
