import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import './Post.css'

function date2Human(date) {
    // 01234567
    // aaaammjj
    let info = [date.slice(6, 8), date.slice(4, 6), date.slice(0, 4)];
    return (info.join('/'))
}

const Post = ({ post }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [count, setCount] = useState(0);

    function handleClickFavorite() {
        if (isFavorite) {
            setIsFavorite(!isFavorite);
            setCount(count - 1);
        } else if (!isFavorite) {
            setIsFavorite(!isFavorite);
            setCount(count + 1);
        }
    }

    return (
        <div className='post-card'>
            <Link to={`/profil/${post.userid}`}>
                <h3 className='Post-postname'>{post.name}</h3>
            </Link>
            <div className="img-container">
                <img className="post-img" src={post.picture} alt={post.name} />
            </div>

            <div className="like-container">
                {isFavorite ?
                    <div className="like-check">
                        <img src="https://i.ibb.co/5402THJ/saori-profilepic.jpg" alt="Saori Kido" className="icon-profile" />
                        <p className="microUserLike">Aimé par <span>Vous</span></p>
                    </div> : <div className="like-container"></div>}
                <div className='favorite-emoji'
                    onClick={handleClickFavorite}>
                    {isFavorite ? "❤️" : "🤍"} {count}
                </div>
            </div>
            <p className='post-caption'><span className="who-posted">{post.name}</span>{" "}"{post.caption}"</p>
            <p className='post-date'>Publié le{" "}{date2Human(post.date)}</p>
        </div>
    )
}

export default Post