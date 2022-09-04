import React, { useEffect, useState } from "react";
import { getBooks } from "./MyBooks";
import { selectLogged, selectIsAirLiner, selectToken } from "./loginSlice";
import {
  doOrderAsync,
  doAddBookAsync,
  selectBooks,
  doGetAllBooksAsync,
  doGetAllOrdersAsync,
} from "./bookSlice";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const BuyBooks = () => {
  const dispatch = useDispatch();

  const Logged = useSelector(selectLogged);
  const books = useSelector(selectBooks);
  const token = useSelector(selectToken);
  const [bookName, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    dispatch(doGetAllBooksAsync());
    // console.log("token", token);
    dispatch(doGetAllOrdersAsync(token));
  }, []);

  return (
    <div>
      <h1>BuyBooks</h1>
      {Logged ? (
        <div>
          {books.map((book, i) => (
            <div key={i}>
              {book.author} {book.bookName} {book.id}
              <button
                onClick={() =>
                  dispatch(doOrderAsync({ id: book.id, token: token }))
                }
              >
                Buy
              </button>
            </div>
          ))}
          <button
            onClick={() =>
              dispatch(doAddBookAsync({ bookName, author, token: token }))
            }
          >
            Create a book
          </button>
          Book Name
          <input onChange={(e) => setBookName(e.target.value)} />
          Author:
          <input onChange={(e) => setAuthor(e.target.value)} />
        </div>
      ) : (
        <Link to="/register">Please login/register</Link>
      )}
    </div>
  );
};

export default BuyBooks;
