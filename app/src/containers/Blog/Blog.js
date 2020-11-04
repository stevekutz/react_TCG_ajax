import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './blog.module.css';

import axios from 'axios';

class Blog extends Component {
    state = {
        posts: [],            
                
    
    }




    // using Lifecycle hooks to fetch data from 'server'
    // axios using Promises due to async nature of requests
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
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

    }




    render () {

    // map posts data from state into Post component
        const posts = this.state.posts.map(post => {
            return <Post 
                    key = {post.id}
                    title = {post.title}
                    author = {post.author}
                    
                    
                    />     
        
        })

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;