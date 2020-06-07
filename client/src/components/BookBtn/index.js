import React from "react";
import Btn from "../Btn";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { toast } from 'react-toastify';

class BookBtn extends React.Component{
 
    postToDB = (book) => {
        var dbBook = {
          title: book.title,
          authors: book.authors,
          synopsis: book.synopsis,
          thumbnail: book.thumbnail,
          link: book.link
        }
    
        axios.post("/api/books", dbBook)
        .then( () => toast.success(`You added ${book.title} to your bookshelf`))
        .catch(err => console.log(err))
      }

    render() {
        return (
          <div>
          <Btn type="primary" onClick={() => 
            {this.postToDB(this.props)}
            }>
            Save Book
        </Btn>
        </div>
        );
    }
  }

  export default BookBtn;