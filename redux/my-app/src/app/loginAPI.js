import axios from "axios";

const URL = "http://127.0.0.1:8000/api/";

// async(2)
export function signin(cred) {
  return new Promise((resolve) =>
    axios.post(URL + "token/", cred).then((res) => resolve({ data: res.data }))
  );
}

export function signUp(userData) {
  console.log(userData);
  return new Promise((resolve) =>
    axios
      .post(URL + "register/", userData)
      .then((res) => resolve({ data: res.data }))
  );
}

// no implemented yet
export function logout() {
  return new Promise((resolve) =>
    axios
      .post(URL, { username: "eyal", password: "123" })
      .then((res) => resolve({ data: res.data }))
  );
}
