import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import {Route, NavLink} from 'react-router-dom';

import classes from './blog.module.css';

// import axios from 'axios';
import axios from '../../axios';

// for use in activeStyle with NavLink
const myStyle = {color: 'deeppink', textDecoration: 'underline'};

class Blog extends Component {

    render () {


        return (


            <div >
                <header className={classes.Blog}>
                    <nav>
                        <ul>
                            {/* using Link instead of <a> prevents page refresh */}
                            <li><NavLink to = "/" activeStyle = {myStyle} exact> Home </NavLink></li>
                            
                            {/* <li><NavLink to = "/new-post" > New Post </NavLink></li> */}
                            <li><NavLink activeStyle = {myStyle} to = {{
                                pathname: '/new-post',
                                
                                // to create a relative path, so something like
                                // pathname = this.props.match.url + '/new-post'
                                
                                hash: '#submit',
                                search: 'quick-submit=true',
                            
                            }}> New Post </NavLink></li>
                        
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