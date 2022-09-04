import axios from "axios";

const URL = "http://127.0.0.1:8000/api/getCategories/";
// async(2)
export function getCategories() {
  return new Promise((resolve) =>
    axios(URL).then((res) => resolve({ data: res.data }))
  );
}
