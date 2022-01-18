import React from 'react'
import { useParams } from 'react-router-dom'
import Axios from "axios";
import "./Profile.css"
//import users from '../assets/users'
import CardProfile from '../components/CardProfile'
import PostList from '../components/PostList'
import { useEffect, useState } from 'react'

const Profile = () => {
    const params = useParams();
    const [infoProfile, setInfoProfile] = useState({})
    useEffect(() => {
        Axios
        .get(`https://a.nacapi.com/sainstgram.users?id=${params.id}`)
        // Extract the DATA from the received response
        .then((response) => {
            console.log(params.id)
            console.log(response.data)
            setInfoProfile(response.data[0])});
    //    users.map((user) => (parseInt(params.id) === user.id) ? setInfoProfile(user) : null ) 
    }, [params.id])

    return (
        <div className="Profile">       
            <CardProfile infoProfile={infoProfile} />
            <PostList className="PostList-profile" id={parseInt(params.id)}/>
        </div>
    )
}

export default Profile
