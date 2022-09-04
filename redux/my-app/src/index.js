import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MyTest from "./app/MyTest";
import Register from "./app/Register";
import BuyBooks from "./app/BuyBooks";
import Categories from "./app/Categories";
import Login from "./app/Login";
import Product from "./app/Product";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/Categories" element={<Categories />}>
              <Route path=":cat_id" element={<Product />} />
            </Route>
            <Route path="/test" element={<MyTest />} />
            <Route path="/books" element={<BuyBooks />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
