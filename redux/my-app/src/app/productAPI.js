import axios from "axios";

const URL = "http://127.0.0.1:8000/api/getProducts/";
// async(2)
export function getProducts(cat_id) {
  console.log(cat_id);
  return new Promise((resolve) =>
    axios.post(URL, cat_id).then((res) => resolve({ data: res.data }))
  );
}
