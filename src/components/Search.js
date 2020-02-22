import React from "react";


function Search() {
  return (
    <div className="border rounded">
        <div className="form-group row mx-1">
            <div className="col-12">
                <h2>Book Search</h2>
                <label for="bookTitle">Book:</label>
                <input className="form-control" id="bookTitle" type="text" placeholder="Title" />

            </div>
            
        </div>
    </div>
  );
}

export default Search;