import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategoriesAsync, selectcategories } from "./categorySlice";
import { Link, Outlet } from "react-router-dom";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectcategories);
  useEffect(() => {
    dispatch(getCategoriesAsync());
  }, []);

  return (
    <div>
      Categories
      <h1>
        {categories.map((cat) => (
          <div>
            <Link to={`/Categories/${cat._id}`}>{cat.desc}</Link>
          </div>
        ))}
      </h1>
      <Outlet></Outlet>
    </div>
  );
};

export default Categories;
