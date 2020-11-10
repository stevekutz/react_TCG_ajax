import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import classes from './blog.module.css';

// import axios from 'axios';
import axios from '../../axios';


class Blog extends Component {
    state = {
        posts: [],            
        selectedPostId: null, 
        error: false,
    
    }




    // using Lifecycle hooks to fetch data from 'server'
    // axios using Promises due to async nature of requests
    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                // console.log(response)
                // MUST updated state inside .then

                // only take first 4 data items and convert author to 'Joe'
                const posts_copy = response.data.slice(0,4)
                const modifiedPosts = posts_copy.map(post => {
                    return {
                        ...post,
                        author: 'Joe'
                    }                
                })

                this.setState({posts: modifiedPosts})
            })
            .catch(error => {
                console.log(error)
                this.setState({error: true})
            })

    }

    handler_selected = (id) => {
        this.setState({selectedPostId: id})
    
    }



    render () {

        let posts = <p className = {classes.Error}> Error occurred </p>

        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Post 
                        key = {post.id}
                        title = {post.title}
                        author = {post.author}
                        clicked = {() => this.handler_selected(post.id)}
                        
                        />     
        
            })
        
        
        
        }

    // map posts data from state into Post component

        return (
            <div >
                <header className={classes.Blog}>
                    <nav>
                        <ul>
                            <li><a href = "/"> Home </a></li>
                            <li><a href = "/new-post"> New Post </a></li>
                        
                        </ul>
                    </nav>
                </header>


                <section className={classes.Blog}>
                    {posts}
                </section>
                <section>
                    <FullPost 
                        id = {this.state.selectedPostId}
                    
                    
                    />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;