import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Header from "./components/Header";
import Search from "./components/Search";
import Saved from "./components/Saved";
import NavTabs from "./components/NavTabs";



import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (

    
    <header>
      <Router>
        <div className="col-12 mt-2" id="nav">
          <NavTabs />
          <h1 className="text-center mb-5">Google Books Search</h1>
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/" component={Search} />
        </div>
      </Router>


    </header>

  );
}

export default App;
