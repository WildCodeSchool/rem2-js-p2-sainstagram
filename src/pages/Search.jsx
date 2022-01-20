import React from 'react'
import SearchBar from '../components/SearchBar'
import { Link } from 'react-router-dom'
import User from '../components/User'
import './Home.css'
import './Search.css'

const Search = () => {
    return (
        <div className='Search'>              
                <SearchBar />
        </div>
    )
}

export default Search