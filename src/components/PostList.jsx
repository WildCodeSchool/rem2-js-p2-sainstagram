import React, {useState} from 'react';
import Post from './Post';
import posts from "../assets/posts.js";


const PostList = () => {
 
    
    return (
        
        <div className='post-list'>
            { posts && posts.sort(function(a, b) {
            //  a = new Date(a.date.slice(0,4),a.date.slice(4,6)-1, a.date.slice(6,8));
            //  b = new Date(a.date.slice(0,4),a.date.slice(4,6)-1, a.date.slice(6,8));
            //  return a>b ? -1 : a<b ? 1 : 0;
            return b.date.localeCompare(a.date);
}).map((post) => (
            <div key={post.userid}>
                <Post post={post}/>
            </div>
            ))}
        </div>

    )
}

export default PostList
