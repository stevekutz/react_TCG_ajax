import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import axios from 'axios';

import classes from './newpost.module.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false,
    }

    // allows 
    componentDidMount () {
        console.log(this.props);
    
    }




    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,
        
        }


        axios.post('/posts', data)
            .then(response => {
                console.log(response)
                // this.props.history.push('/posts');  // back button in browser works

                this.setState({ submitted: true});   // back button does not take you back

                // this.props.history.replace('/posts');  // back button does not take you back
            })
    
    }



    render () {
        let redirect = null
        if (this.state.submitted) {
            redirect = <Redirect to ='/posts' />
        }
    // console.log(this.props)

        return (



            <div className={classes.NewPost}>

                {redirect}

                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Josh</option>
                    <option value="Manu">Nancy</option>
                </select>
                <button onClick = {this.postDataHandler} >Add Post</button>
            </div>
        );
    }
}

export default NewPost;