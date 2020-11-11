import React, { Component } from 'react';
import axios from 'axios';


import classes from './fullpost.module.css';

class FullPost extends Component {
    state = {
            loadedPost: null
        }

   

    
    componentDidMount () {
        console.log('FP CDM >> ', this.props)
        this.loadData();
    }

    componentDidUpdate () {
        console.log('FP CDU >> ', this.props)
        this.loadData();
    }


    loadData () {
        if ( this.props.match.params.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id != + this.props.match.params.id) ) {
                axios.get( '/posts/' + this.props.match.params.id )
                    .then( response => {
                        // console.log(response);
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    
    }


    deletePostHandler = () => {
        axios.delete( '/posts/' + this.props.match.params.id )
        .then(response => {
            console.log('   deletepostHandler response    > ', response)
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