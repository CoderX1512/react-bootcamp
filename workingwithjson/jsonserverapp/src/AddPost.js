import React from 'react';

class AddPost extends React.Component{
    state = {
        title:'',
    };

    handleChange = (e) => {
        this.setState({title: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const{title} = this.state;

        //Send a Post request to the JSON server to create a new post
        fetch('http://localhost:3001/posts', {
            method:'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify( { title } ),
        })
        .then((response) => response.json())
        .then((newPost) => {
            // Handle the new post data, e.g., update state or display as success message
            console.log('New Post:', newPost);

            //Clear the input field
            this.setState( {title: '' })
        })
        .catch((error) =>{
            console.error('Error creating the post: ', error);
        });
        window.location.reload();
    };

    render(){
        const{ title } = this.state;
        return (
            <div>
                <h2>Add a New Post</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title:</label>
                        <input type="text" value={title} onChange = {this.handleChange}/>
                    </div>
                    <button type='submit'>Add Post</button>
                </form>
                </div>
        );

    } 
}
export default AddPost;