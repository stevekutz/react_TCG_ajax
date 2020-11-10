import React, {Component} from 'react';
import Post from '../../../components/Post/Post';
import { Link } from 'react-router-dom';

import axios from '../../../axios';


import classes from './posts.module.css'

class Posts extends Component {
    state = {
        posts: [],  
        // selectedPostId: null,          
    }
    
    // using Lifecycle hooks to fetch data from 'server'
    // axios using Promises due to async nature of requests
    componentDidMount() {

        console.log(this.props)

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
                // this.setState({error: true})
            })

    }

    handler_selected = (id) => {
        this.setState({selectedPostId: id})
    
    }
    
    
    render() {
        let posts = <p className = {classes.Error}> Error occurred </p>

        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (<Link to = {'/' + post.id} key = {post.id} >
                            <Post 
                                    // key = {'/' + post.id}
                                    title = {post.title}
                                    author = {post.author}
                                    clicked = {() => this.handler_selected(post.id)}
                                    // {...this.props}  // should provide routing props to Post component
                                    />     
                        </Link>
                )
            })        
        }



        return (
        
            <section className = {classes.Posts}>
                {posts}
            </section>
        
        
        )
    
    
    }



}

export default Posts