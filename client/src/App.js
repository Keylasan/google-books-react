import React, { Component } from "react";
import react from "react";
import "./App.css";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Results from "./components/Results";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
     <Router>
<Navbar />
     </Router>
     
    </div>
  );
}


export default App;
