import React from 'react';

// import {withRouter} from 'react-router-dom';

import classes from './post.module.css';

const post = (props) => (
    <article  className={classes.Post} onClick = {props.clicked}>
        <h1> {props.title}</h1>
        <div className={classes.Info}>
            <div className={classes.Author}>{props.author}</div>
        </div>
    </article>
);

// normally, Post will not show any routing props even though it is rendered from routed Posts comp
// using this HOF allows Post component to show all routing props
// export default withRouter(post)



export default (post);