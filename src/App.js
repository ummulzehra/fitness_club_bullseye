// App.js
import React, { useState } from "react";
import BookForm from "./components/bookForm";
import BookList from "./components/bookList";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const removeBook = (index) => {
    setBooks(books.filter((book, i) => i !== index));
  };

  const removeAll = () => {
    setBooks([]);
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">Book Management</h1>
      <BookForm addBook={addBook} />
      <BookList books={books} removeBook={removeBook} removeAll={removeAll} />
    </div>
  );
};

export default App;




