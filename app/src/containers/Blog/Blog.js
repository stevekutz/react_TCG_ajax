import React, { Component } from 'react';
import Posts from './Posts/Posts';

// we commneted this out to load asynchronously via hoc asyncComponent
// import NewPost from './NewPost/NewPost';

import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent( () => {
    return import('./NewPost/NewPost');
} )

import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

import classes from './blog.module.css';

// import axios from 'axios';
import axios from '../../axios';

// for use in activeStyle with NavLink
const myStyle = {color: 'deeppink', textDecoration: 'underline'};

class Blog extends Component {
    state = {
        auth: true,
    }


    render () {


        return (


            <div >
                <header className={classes.Blog}>
                    <nav>
                        <ul>
                            {/* using Link instead of <a> prevents page refresh */}
                            <li><NavLink to = "/posts/" activeStyle = {myStyle} exact> Home </NavLink></li>
                            
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

                {/* switch only allows one route to match */}
                    <Route path =  '/' exact component = {Posts}/>
                <Switch>
                    {/* using Guards to check for auth */}
                    {this.state.auth ? <Route path = '/new-post' component = {AsyncNewPost}/> : null }

                    {/* <Route path =  '/new-post' component = {NewPost}/>  */}
                 {/* <Route path =  '/:id' exact component = {FullPost}/> */}
                    
                    <Route path = '/posts' component = {Posts}/> 
                    <Redirect from = '/' to = '/posts' />
                </Switch>



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