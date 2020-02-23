import React from "react";
import BookList from "./BookList";


function Search() {
  return (
    <div>
        <div className="border rounded mb-4">
            <div className="form-group row mx-1">
                <div className="col-12">
                    <h2>Book Search</h2>
                    <label for="bookTitle">Book:</label>
                    <input className="form-control" id="bookTitle" type="text" placeholder="Title" />

                </div>
                
            </div>
        </div>

            <div className="row mx-2">
        <div className="col-12">
            <BookList
                title="Books Found" />
        </div>
    </div>
    </div>
  );
}

export default Search;