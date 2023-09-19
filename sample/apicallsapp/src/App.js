import React from 'react';
// import PersonList from './GetRequest';
// import PostRequest from './PostRequest';
import ItemDisplay from  './FakeStorePost';

class App extends React.Component {
  render () {
    return(
      <div>
        <h3 className="p-3 text-center">React HTTP GET requests with Axios </h3>
        <ItemDisplay />
      </div>
    );
  }
}

export default App ;
