import React, {useState} from 'react';
import Post from './Post';
import posts from "../assets/posts.js";
import './PostList.css'

const PostList = () => {
    return (
        <div className='Post-list'>
            { posts && posts
            .sort(function(a, b) {
                return b.date.localeCompare(a.date);
            })
            .map((post,index) => (
            <div className='Postlist-post' key={index}>
                <Post post={post}/>
            </div>
            ))}
        </div>
    )
}

export default PostList
