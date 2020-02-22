import React from "react";
import Book from "./Book.js"


function Saved() {
  return (
    <div className="row mx-2">
        <div className="col-12">
            <h2>Saved Books</h2>
            <Book />
            <Book />
            <Book />
        </div>
    </div>
  );
}

export default Saved;