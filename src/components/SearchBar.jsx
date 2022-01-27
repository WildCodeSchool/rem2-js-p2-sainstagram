import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

function SearchBar() {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    
    const url = "https://a.nacapi.com/sainstgram.users";
    Axios
      .get(url)
      .then((response) => setUsers(response.data))
      .catch(error => console.log(`API call error: ${error}`))
      }, []);


  const navigate = useNavigate();

  const onSuggestionHandler = (text) => {
    setText(text);
    setSuggestions([]);
    const id = users.find(user => user.name === text).id;
    const url = `/Profil/${id}`;
    navigate(url);
  }
  const onChangeHandler = (text) => {
    let matches = []
    if (text.length > 0) {
      matches = users.filter(user => {
        return user.name.toLowerCase().startsWith(text.toLowerCase()
        )
      })
    }
  
    setSuggestions(matches)
    setText(text)
  }


  return (
    <div className="SearchBar">
      <div className="searchbar-container"><h4>Chercher un chevalier</h4>
      <input className="input" type="text"
        onChange={e => onChangeHandler(e.target.value)}
      /></div>
      {suggestions && suggestions.map((suggestion, i) =>
        <div key={i} className="suggestion" onClick={() => onSuggestionHandler(suggestion.name)}>
          <ul className="suggestion-list">
            <img className="profile-pic" src={suggestion.profilepic} alt={suggestion.name} />
            <span className="name">{suggestion.name}</span>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
