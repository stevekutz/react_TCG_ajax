import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import {Route, Link} from 'react-router-dom';

import classes from './blog.module.css';

// import axios from 'axios';
import axios from '../../axios';


class Blog extends Component {

    render () {


        return (
            <div >
                <header className={classes.Blog}>
                    <nav>
                        <ul>
                            {/* using Link instead of <a> prevents page refresh */}
                            <li><Link to = "/"> Home </Link></li>
                            
                            {/* <li><Link to = "/new-post"> New Post </Link></li> */}
                            <li><Link to = {{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: 'quick-submit=true',
                            
                            }}> New Post </Link></li>
                        
                        </ul>
                    </nav>
                </header>

                <Route path =  '/' exact component = {Posts}/>
                <Route path =  '/new-post' component = {NewPost}/>


            </div>
        );
    }
}

export default Blog;

                // <section>
                //     <FullPost 
                //         id = {this.state.selectedPostId}
                    
                    
                //     />
                // </section>
                // <section>
                //     <NewPost />
                // </section>