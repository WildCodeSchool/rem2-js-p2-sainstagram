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

    function getPostList(){
        let list = postList.sort(function (a, b) { return b.date.localeCompare(a.date); });

        let post = {"userid":0, "name":"HP Eats", "picture":"/images/pub.gif", "caption": "Venez découvrir notre nouvelle offre",
        "date":"20220128"};

        console.log(`length:${list.length}`)
        if (list.length===0){
            console.log('return')
            return list;
        } else if (list.length<=3) {
            console.log('push')
            list.push(post);
        }else{
            console.log('splice')
            list.splice(3, 0, post);
        }
        return list;
    }

    return (
        <div className='Post-list'>
            {getPostList()
                .map((post, index) => (
                    <div className='Postlist-post' key={index}>
                        <Post post={post} />
                    </div>
                ))}
        </div>
    )
}

export default PostList;