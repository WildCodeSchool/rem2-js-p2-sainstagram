import React, {useState} from 'react';
import Post from './Post';
import posts from "../assets/posts.js";
import './PostList.css'

const PostList = () => {
    return (
        <div className='post-list'>
            { posts && posts
            .sort(function(a, b) {
                return b.date.localeCompare(a.date);
            })
            .map((post) => (
            <div key={post.userid}>
                <Post post={post}/>
            </div>
            ))}
        </div>
    )
}

export default PostList
