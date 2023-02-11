
import React from "react";

const Book = ({ title, author, isbn, removeBook, index }) => {
    return (
      <tr>
        <td>{title}</td>
        <td>{author}</td>
        <td>{isbn}</td>
        <td>
          <button className="btn btn-danger" onClick={() => removeBook(index)}>
            Delete
          </button>
        </td>
      </tr>
    );
  };
  
  export default Book;
