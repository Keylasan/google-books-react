import React, { Component } from "react";
import axios from "axios";
import BookBtn from "../BookBtn";
import { Row, Col } from "../Grid";
import { List } from "../List";
import { ListItem } from "../List";
import Empty from "../Empty";


class Test extends Component {
  state = {
    searchRes: [],
    query: "",
    books: []
  };

  displayRes = data => {
    this.setState({ books: data.items });
  };

  searchGBooks = () => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${
      this.state.query
    }`;
    axios
      .get(url)
      .then(res => {
        //console.log(res);
        this.displayRes(res.data);
      })
      .catch(err => console.log(err));
  };

  handleInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
    //console.log("Query", this.state.query);
  };

  render() {
    return (
      <Row>
        <Col size="md-12">
        <div>
          <input id="bookQ" className="form-control form-control-lg" autoComplete="off" type="text" name="query" onChange={this.handleInput} />
          <button  type="submit" onClick={this.searchGBooks} >
            Search for Books
          </button>
                   

          {(this.state.books && this.state.books.length > 0) ? 
          <List>
          {this.state.books.map(book => {
            return (
              <div>
              <ListItem
              key={book.id} 
              authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
              title={book.volumeInfo.title}
              synopsis={book.volumeInfo.description ? 
                book.volumeInfo.description : "No Description Available"}
              link={book.volumeInfo.infoLink}
              thumbnail={book.volumeInfo.imageLinks.thumbnail ? 
                book.volumeInfo.imageLinks.thumbnail : "#"}
              />

              <BookBtn
              authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
              title={book.volumeInfo.title}
              synopsis={book.volumeInfo.description ? 
                book.volumeInfo.description : "No Description Available"}
              link={book.volumeInfo.infoLink}
              thumbnail={book.volumeInfo.imageLinks.thumbnail ? 
                book.volumeInfo.imageLinks.thumbnail : "#"}
              
              />
              </div>
            )
          })}
          </List>
          : 
          <Empty/>         
          }
          
        </div>
        </Col>
      </Row>
    );
  }
}

export default Test;