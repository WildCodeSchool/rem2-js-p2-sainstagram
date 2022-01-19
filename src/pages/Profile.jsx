import React from 'react'
import { useParams } from 'react-router-dom'
import Axios from "axios";
import "./Profile.css"
import CardProfile from '../components/CardProfile'
import PostList from '../components/PostList'
import { useEffect, useState } from 'react'

const Profile = () => {
    const params = useParams();
    const [infoProfile, setInfoProfile] = useState({})
    //const [category, setCategory] = useState("")

    useEffect(() => {
        Axios
        .get(`https://a.nacapi.com/sainstgram.users?id=${params.id}`)
        .then((response) => {
            setInfoProfile(response.data[0])});
    }, [params.id])

    /*useEffect(() => {
        console.log(infoProfile.category)
        setCategory(infoProfile.category.split("'").pop().split(" ").pop())
        
        console.log(category)

    }, [infoProfile])*/

    return (
        <div className="Profile">  
            
            <CardProfile infoProfile={infoProfile} />
            <PostList className="PostList-profile" id={parseInt(params.id)}/>
        </div>
    )
}

export default Profile
