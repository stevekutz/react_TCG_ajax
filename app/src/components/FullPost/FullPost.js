import React, { Component } from 'react';

import classes from './fullpost.module.css';

class FullPost extends Component {
    render () {
        let post = <p className = {classes.Prompt}>Please select a Post!</p>;
        if (this.props.id) {
            post = (
                <div className={classes.FullPost}>
                    <h1>Title</h1>
                    <p>Content</p>
                    <div className={classes.Edit}>
                        <button className={className.Delete}>Delete</button>
                    </div>
                </div>

            );
        }
        
        return post;
    }
}

export default FullPost;