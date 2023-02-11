// BookForm.js
import React, { useState } from "react";

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ title, author, isbn });
    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="isbn">ISBN:</label>
        <input
          type="text"
          className="form-control"
          id="isbn"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          className="form-control"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      
      <button type="submit" className="btn btn-primary">
        Add Book
      </button>
    </form>
  );
};

export default BookForm;
