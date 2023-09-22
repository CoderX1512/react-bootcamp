import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


class App extends Component {
  state = {
    books: [],
    bookName: '',
    author: '',
    publication: '',
    price: '',
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleAddBook = () => {
    const { bookName, author, publication, price } = this.state;
    if (bookName && author && publication && price) {
      const newBook = {
        name: bookName,
        author,
        publication,
        price,
      };
      this.setState((prevState) => ({
        books: [...prevState.books, newBook],
        bookName: '',
        author: '',
        publication: '',
        price: '',
      }));
    }
    // Check if any of the fields are empty
    if (!bookName || !author || !publication || !price) {
      alert('Please fill in all fields.');
      return; // Do not proceed if any field is empty
    }
  };

  render() {
    const { bookName, author, publication, price, books } = this.state;

    return (
      <div className="container">
        <h1 className="mt-5 mb-4">My Book Management App</h1><br/>
        <div className="row">
          <div className="col-md-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="bookName"
                placeholder="Book Name"
                value={bookName}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="author"
                placeholder="Author"
                value={author}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="publication"
                placeholder="Publication"
                value={publication}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="price"
                placeholder="Price"
                value={price}
                onChange={this.handleInputChange}
              />
            </div><br/>
          </div>
          <div className="col-md-1">
            <button className="btn btn-primary" onClick={this.handleAddBook}>
              Add
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <table className="table mt-4">
              <thead>
                <tr>
                  <th>Book Name</th>
                  <th>Author</th>
                  <th>Publication</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <tr key={index}>
                    <td>{book.name}</td>
                    <td>{book.author}</td>
                    <td>{book.publication}</td>
                    <td>{book.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
