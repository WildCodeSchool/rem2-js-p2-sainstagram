import React from 'react'
import { Link } from "react-router-dom";
import './Post.css'

function date2Human (date) {
    // 01234567
    // aaaammjj
    let info = [date.slice(6,8), date.slice(4,6), date.slice(0,4)];
    return (info.join('/'))
}

const Post = ({post}) => {
    return (
        <div className='post-card'>
            <Link to={`/profil/${post.userid}`}><h3 className='Post-postname'>{post.name}</h3></Link>
            <div className="img-container">
                <img className="post-img" src={post.picture} alt={post.name} />
            </div>
            <p className='post-caption'><span className="who-posted">{post.name}</span>{" "}"{post.caption}"</p>
            <p className='post-date'>Publié le{" "}{date2Human(post.date)}</p>
        </div>
    )
}

export default Post
