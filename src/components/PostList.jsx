import React, {useState, useEffect} from 'react';
import Post from './Post';
import posts from "../assets/posts.js";
import './PostList.css'

const PostList = (props) => {
    const [postList, setPostList] = useState(posts)

    useEffect(() => {
        if(props.id){
            setPostList(postList.filter((post) => post.userid === props.id)
            )}
    }, [])
    return (
        <div className='post-list'>
            { postList && postList
            .sort(function(a, b) {
                return b.date.localeCompare(a.date);
            })
            .map((post,index) => (
            <div key={index}>
                <Post post={post}/>
            </div>
            ))}
        </div>
    )
}

export default PostList
