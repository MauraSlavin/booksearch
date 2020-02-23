import React from "react";
import BookList from "./BookList.js"


function Saved() {
  return (
    <div className="row mx-2">
        <div className="col-12">
            <BookList
                title="Saved Books" />
        </div>
    </div>
  );
}

export default Saved;