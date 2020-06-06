import React, { Component } from "react";
import react from "react";
import "./App.css";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Results from "./components/Results";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from "react-router-dom";
import Saved from "./components/Saved";
function App() {
  return (
    <div className="App">
     <Router>
<Navbar />
<Header />
<Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/results" component={Results} />


     </Router>
     
    </div>
  );
}


export default App;
