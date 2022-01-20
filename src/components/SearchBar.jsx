import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

function SearchBar() {
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const loadUsers = async() => {
      const response = await axios.get("https://a.nacapi.com/sainstgram.users");
      setUsers(response.data)
    }
    loadUsers();
  }, [])

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
        const regex = new RegExp(`${text}`, "gi");
        return user.name.match(regex)
      })
    }
    setSuggestions(matches)
    setText(text)
  }



  return (
    <div className="">
      <input type="text" 
      onChange = {e => onChangeHandler(e.target.value)}
      value={text}
  //     onBlur={ () => {
  //      setTimeout(() => {
  //       setSuggestions([])
  //      }, 100);
  //    }}
   />
      {suggestions && suggestions.map((suggestion, i) => 
      <div key={i} className='suggestion' onClick={() => onSuggestionHandler(suggestion.name)}>{suggestion.name}</div>
      )}
    </div>
  );
}

export default SearchBar;