import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class ItemDisplay extends Component {
  constructor() {
    super();
    this.state = {
      items: [], // Store the items from the API response
    };
  }

  componentDidMount() {
    // Make a GET request to your API endpoint
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        this.setState({ items: response.data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <h1>Items</h1>
        <div className="row">
          {items.map((item) => (
            <div className="col-md-4" >
              <div className="card mb-4">
                <img src={item.image} className="card-img-top" alt={item.name} 
                style={{ width: '100px', height: '100px' }} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary">Add to Cart</button>
                  <p className="card-text">${item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ItemDisplay;
