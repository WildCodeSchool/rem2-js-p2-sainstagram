import React from 'react'
import { Link } from "react-router-dom";
import './Post.css'


const Post = ({post}) => {
    return (
        <div className='post-card'>
            <Link to={`/profil/${post.userid}`}><h3 className='Post-postname'>{post.name}</h3></Link>
            <img className="post-img" src={post.picture} alt={post.name} />
            <p className='post-caption'>{" "}"{post.caption}"</p>
            <p className='post-date'>Publié le{" "}{post.date}</p>
        </div>
    )
}

export default Post
