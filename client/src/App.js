import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "./App.css";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Saved from "./components/Saved";
import Test from "./components/Test";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
        <Route exact path="/" component={Test} />
        <Route exact path="/search" component={Test} />
        <Route exact path="/saved" component={Saved} />
      <Footer />
    </Router>
  );
}


export default App;
