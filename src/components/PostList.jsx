import React, { useState, useEffect } from 'react';
import Axios from "axios";
import Post from './Post';
import './PostList.css'

const PostList = (props) => {
    const [postList, setPostList] = useState([]);
    useEffect(() => {
        if (props.id) {
            Axios
                .get(`https://a.nacapi.com/sainstgram.posts?userid=${props.id}`)
                .then((response) => setPostList(response.data))
                .catch(error => console.log(`API (posts) call error: ${error}`))
        } else {
            Axios
                .get("https://a.nacapi.com/sainstgram.posts")
                .then((response) => setPostList(response.data))
                .catch(error => console.log(`API (posts) call error: ${error}`))
        }
    }, [])

    return (
        <div className='Post-list'>
            {postList && postList
                .sort(function (a, b) { return b.date.localeCompare(a.date); })
                .map((post, index) => (
                    <div className='Postlist-post' key={index}>
                        <Post post={post} />
                    </div>
                ))}
        </div>
    )
}

export default PostList;