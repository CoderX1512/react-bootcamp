import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class UserDetails extends Component {
  constructor() {
    super();
    this.state = {
      users: [], // Store the items from the API response
    };
  }

  componentDidMount() {
    // Make a GET request to your API endpoint
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { users } = this.state;
    const h5Styles = {
        fontFamily: 'Arial, sans-serif', // Replace with your desired font-family
      };
    const shortHrStyles = {
      width: '20%', // Adjust the width as needed
      margin: '20px auto', // Center the line horizontally and provide some spacing
    };  

    return (
      <div>
        <h1>User details</h1>
        <div className="text-center">
          {users.map((user) => (
            <div className="text-center m-3">
              <h2>{user.name}</h2>
              <h3 style={h5Styles}>{user.email}</h3>
              <hr style={shortHrStyles} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default UserDetails;