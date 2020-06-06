import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from 'axios';

export function search() {
    var userInput = document.getElementById("search-bar").value;
    var queryURL="https://www.googleapis.com/books/v1/volumes?q="+userInput;
    return axios
    .get(queryURL).then(res => {
        console.log(res)
        return res.data;
    })
}

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();






