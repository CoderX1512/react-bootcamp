import React, {Component, useEffect, useState } from 'react';
import axios from 'axios';
import "./tablestyles.css"; // Import your CSS file

class PostEmp extends Component {
    state = {
        emps: [],
    };

    componentDidMount () {
        axios.get('http://localhost:3001/employees')
        .then((response) => {
            this.setState({emps: response.data});
        })
        .catch((error) =>{
            console.error('Error Fetching data: ', error);
        });
    }

    render (){
        const { emps } = this.state;

        return (
            <div>
              <h1>Employee Information</h1>
              <table>
                <thead>
                  <tr>
                    <th>Employee ID</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {emps.map((emp) => (
                    <tr key={emp.id}>
                      <td>{emp.id}</td>
                      <td>{emp.fname}</td>
                      <td>{emp.lname}</td>
                      <td>{emp.address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
    }
}

export default PostEmp;