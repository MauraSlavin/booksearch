import React from "react";
import Book from "./Book.js"


function BookList(props) {
  return (
    <div className="row mx-2">
        <div className="col-12">
            <h2>{props.title}</h2>
            <Book />
            <Book />
            <Book />
        </div>
    </div>
  );
}

export default BookList;