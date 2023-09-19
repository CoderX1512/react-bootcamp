import React from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';


class PostRequestErrorHandling extends React.Component{
    constructor(){
        super();
        this.state = {
            articleId: null,
            errorMessage: null
        };
        
    }
       componentDidMount(){
        //  POST request using axios with error handling
        const article = {title: 'React POST Request Example'};
        axios.post('https://reqres.in/invalid-url',article)       
        .then( response => this.setState({ articleId: response.data.id }))
        .catch(error => {
            this.setState( {errorMessage : error.message} );
            console.error('There was an error!', error);
        });
    }

    render(){
        const { errorMessage } = this.state;
        return(
            <div className='card text-center m-3'>
                <h5 className='card-header'> POST request with Error handling</h5>
                <div className='card-body'>
                    Error: {errorMessage}
                </div>
            </div>
        );
    }
}

export default PostRequestErrorHandling;