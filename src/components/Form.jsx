import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import "./Form.css"

function Form() {
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate();

  function Validation(event) {
    console.log('dans Validation');

    console.log('dans Validation2');
    let url = 'https://a.nacapi.com/sainstgram.posts'
    let today = new Date().toISOString().split('T')[0].split('-').join(''); // YYYYMMDD format
    const newPost = {
      "userid": 6, "date": today, "picture": event.target.picture.value,
      "caption": event.target.caption.value
    }
    console.log(newPost);
    console.log('dans Validation3');

    fetch(url, { method: 'post', body: JSON.stringify(newPost) })
    // fetch(url, { method: 'post', body: newPost })
      //.then(function (response) { return response.json(); })
      .then(function (response) { return ''; })
    //.then(function (data) { console.log("data", data) })
    console.log('dans Validation4');

    console.log('dans Validation5');
    navigate('/');
    event.preventDefault();
  }

  return (
    <div className="Formulaire">
      <div className='TextGlobal'>
        <h1>Ajoutez votre image</h1>
        <form onSubmit={Validation}>
          <ul>
            <li>
              <label htmlFor="picture">Url de l'image :</label>
            </li>
            <li>
              <input type="text" name="picture" />
            </li>
            <li>
              <label htmlFor="caption">Commentaire du post :</label>
            </li>
            <li>
              <input type="text" name="caption" />
            </li>
            <input type="submit" value="Poster" />
          </ul>
        </form>
      </div>
    </div>
  )
}

export default Form;