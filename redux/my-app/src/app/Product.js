import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectcategories } from "./categorySlice";
import { getProductsAsync } from "./productSlice";
const Product = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const [catid, setCatid] = useState(parseInt(params.cat_id, 10));
  console.log(catid);
  const categories = useSelector(selectcategories);

  return (
    <div>
      Product <br />
      <h1>{categories[catid - 1].desc}</h1>
      <hr></hr>
      <button onClick={() => dispatch(getProductsAsync({ cat_id: catid }))}>
        Get products
      </button>
    </div>
  );
};

export default Product;
