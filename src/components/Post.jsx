import React from 'react'
import { Link } from "react-router-dom";
import './Post.css'

const Post = ({post}) => {
    return (
        <div className='post-card'>
            <Link to={`/profil/${post.userid}`}><h3>{post.name}</h3></Link>
            <img className="post-img" src={post.picture} alt={post.name} />
            <p>{" "}{post.caption}</p>
            <p>Publié le{" "}{post.date}</p>
        </div>
    )
}

export default Post
