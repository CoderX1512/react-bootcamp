import React from 'react';

import axios from 'axios';


export default class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( res => {
            const persons = res.data;
            this.setState({ persons });
        })
    }
    //Syntax of axios
    // axios.get('url')     'Get' is to pull the data 
    // .then()               this block is called on successfull pulling of data
    //.catch()           this block is called on failure
    //.finally()         called everytime irrespective of success or failure    


    render() {
        return (
            // <ul>
            //     {this.state.persons.map( person => <li>{person.username}</li>)}
            // </ul>
            <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {this.state.persons.map(person => (
            <tr>
              <td>{person.id}</td>
              <td>{person.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
        )
    }
}