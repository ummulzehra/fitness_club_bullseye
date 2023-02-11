// BookList.js
import React from "react";
import Book from "./Book";

const BookList = ({ books, removeBook, removeAll }) => {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <Book key={index} {...book} removeBook={removeBook} index={index} />
            ))}
          </tbody>
        </table>
        <button className="btn btn-danger mr-3" onClick={removeAll} disabled={books.length === 0}>
          Remove All
        </button>
      </div>
    );
  };
  
  export default BookList;