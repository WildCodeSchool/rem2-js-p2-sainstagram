import React from 'react'
import { useParams } from 'react-router-dom'
import Axios from "axios"
import "./Profile.css"
import CardProfile from '../components/CardProfile'
import PostList from '../components/PostList'
import { useEffect, useState } from 'react'
import getClassName from '../tools/getClassName'

const Profile = () => {
    const params = useParams();
    const [infoProfile, setInfoProfile] = useState({})

    useEffect(() => {
        Axios
        .get(`https://a.nacapi.com/sainstgram.users?id=${params.id}`)
        .then((response) => {
            setInfoProfile(response.data[0])});
    }, [params.id])

    

    return (
        <div className="Profile">  
            <CardProfile className={`${getClassName(infoProfile.category)}`} infoProfile={infoProfile} />
            <PostList className={`${getClassName(infoProfile.category)} PostList-profile`} id={parseInt(params.id)}/>
        </div>
    )
}

export default Profile
