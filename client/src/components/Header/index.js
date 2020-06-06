import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
       
    <div className="header">
    <div class="container-fluid">
      <div class="row align-items-center my-5">
        <div class="col-lg-5">
          <h1 class="font-weight-light">(REACT) Google Books Search </h1>
          <h2>Search For And Find Books Of Interest</h2>
        </div>
      </div>
    </div>
  </div>
);
}

export default Header;