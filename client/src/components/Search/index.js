import React from "react";
import { Link } from "react-router-dom";

import { search } from "../../index";
import "./style.css";

function Search() {
  return (
    <div className="Search">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          <input type="text" id="search-bar"></input>
          <button onClick={search}>Search Book</button>
        </div>
      </div>
    </div>
  );
}
export default Search;
