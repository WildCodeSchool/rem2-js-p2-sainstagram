import React from 'react'
import './Home.css'
import SearchBar from '../components/SearchBar'
import './Search.css'

const SearchProfile = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        Axios
            .get("https://a.nacapi.com/sainstgram.users")
            .then((response) => {
                setUsers(response.data)
            })
    }, []);

const Search = () => {
    return (
        <div className='home'>              
                <SearchBar />
                {users.map((user) => <Link to={`/Profil/${user.id}`}><User {...user} key={user.id} /></Link>)}
        </div>
    )
}

export default Search