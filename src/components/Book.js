import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './images/trash-solid.svg';



function Book() {
  return (
    <div className="border rounded">
      <div className="row">
        <div className="col-8">
          <h3>Title</h3>
        </div>
        <div className="col-1">
          {/* <button className="btn btn-primary">View</button> */}
          <button className="btn"><i className="fa fa-eye"></i></button>
        </div>
        <div className="col-1">
          <button className="btn"><i className="fa fa-trash"></i></button>
        </div>
      </div>

      <div className="row">
        <div className="col-1">
          <img className="img-fluid mx-2" src="http://books.google.com/books/content?id=tcSMCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="pic" />
        </div>
        <div className="col-10 my-2">
          <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. 
          It has roots in a piece of classical Latin literature from 45 BC, making 
          it over 2000 years old. Richard McClintock, a Latin professor at 
          Hampden-Sydney College in Virginia, looked up one of the more obscure 
          Latin words, consectetur, from a Lorem Ipsum passage, and going through 
          the cites of the word in classical literature, discovered the undoubtable 
          source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus 
          Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 
          45 BC. This book is a treatise on the theory of ethics, very popular during 
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
          comes from a line in section 1.10.32.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Book;