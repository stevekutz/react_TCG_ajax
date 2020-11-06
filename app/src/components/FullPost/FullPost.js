import React, { Component } from 'react';
import axios from 'axios';


import classes from './fullpost.module.css';

class FullPost extends Component {
    state = {
            loadedPost: null
        }

   

    // we want to only fetch data when we get new props
    componentDidUpdate () {
        if ( this.props.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
                axios.get( 'https://jsonplaceholder.typicode.com/posts/' + this.props.id )
                    .then( response => {
                        // console.log(response);
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }

    
    deletePostHandler = () => {
        axios.delete( 'https://jsonplaceholder.typicode.com/posts/' + this.props.id )
        .then(response => {
            console.log(response)
        })
    
    }

    render () {
        let post = <p className = {classes.Prompt}>Please select a Post!</p>;

        if ( this.props.id ) {
            post = <p className = {classes.Prompt}>Loading...!</p>;
        }

        if (this.state.loadedPost) {
            post = (
                <div className={classes.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className={classes.Edit}>
                        <button onClick = {this.deletePostHandler} className={classes.Delete}>Delete</button>
                    </div>
                </div>

            );
        }
        
        return post;
    }
}

export default FullPost;