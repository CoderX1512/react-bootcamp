import React from "react";
import PostList from "./postlist";
import AddPost from "./AddPost";

class App extends React.Component {
  render() {
    return(
      <div>
        <AddPost />
        <PostList />
      </div>
    );
  }
}

export default App ;
