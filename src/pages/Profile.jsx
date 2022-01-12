import React from 'react'
import { useParams } from 'react-router-dom'
import "./Profile.css"
import users from '../assets/users'
import CardProfile from '../components/CardProfile'
import PostList from '../components/PostList'
import { useEffect, useState } from 'react'

const Profile = () => {
    const params = useParams();
    const [infoProfile, setInfoProfile] = useState({})
    useEffect(() => {
        users.map((user) => (parseInt(params.id) === user.id) ? setInfoProfile(user) : null ) 
    }, [params.id])

    return (
        <div>
            <CardProfile infoProfile={infoProfile} />
            <PostList />
        </div>

    )
}

export default Profile
