import axios from "axios";

const URL = "http://127.0.0.1:8000/api/";

// async(2)
export function orderBook(cred) {
  return new Promise((resolve) =>
    axios
      .post(URL + "orderbook/", cred, {
        headers: {
          Authorization: `Bearer ${cred.token}`,
        },
      })
      .then((res) => resolve({ data: res.data }))
  );
}
export function addBook(newBook) {
  console.log(newBook);
  return new Promise((resolve, reject) =>
    axios
      .post(URL + "addbook/", newBook, {
        headers: {
          Authorization: `Bearer ${newBook.token}`,
        },
      })
      .then((res) => resolve({ data: res.data }))
  );
}

export function getOrders(token) {
  // console.log(token);
  return new Promise((resolve, reject) =>
    axios(URL + "getOrders/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => resolve({ data: res.data }))
  );
}

export function getAllBooks() {
  return new Promise((resolve) =>
    axios(URL + "getallbooks/").then((res) => resolve({ data: res.data }))
  );
}
// getOrders
// no implemented yet
export function logout() {
  return new Promise((resolve) =>
    axios
      .post(URL, { username: "eyal", password: "123" })
      .then((res) => resolve({ data: res.data }))
  );
}
