// import React from 'react';
// import UserDetails from  './PostActiveUsers';

// class App extends React.Component {
//   render () {
//     return(
//       <div>
//         <h3 className="p-3 text-center">Diplay Active Users Account Details </h3>
//         <UserDetails />
//       </div>
//     );
//   }
// }

// export default App ;
//Api link - https://jsonplaceholder.typicode.com/users

import React from 'react';
import Account from './Accounts';

class App extends React.Component{
  state ={
    users:[],
    isLoaded:false,
    error: null
  };

  fetchUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) =>
      this.setState({
        users: data,
        isLoaded: true,
       })        
    )
    .catch((error) => this.setState({ error, isLoaded:true}));
  }

  componentDidMount() {
    this.fetchUsers();
  }

  render() {
    const { isLoaded, users, error } = this.state;
    return (
    <React.Fragment>
    <h1>Display Active Users Account Details</h1>
    {error ? <p>{error.message}</p> : null}
    {isLoaded ? ( users.map((user) => {return <Account user={user} />; }))
    : (<h3>Fetching Users...</h3>)}
    </React.Fragment> ); 
    
  }
    
}
    // condition ? dosomething : dosomethingelse
    
