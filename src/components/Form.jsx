import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import "./Form.css"

function Form() {
  const navigate = useNavigate();

  function Validation(event) {
    let url = 'https://a.nacapi.com/sainstgram.posts'
    let today = new Date().toISOString().split('T')[0].split('-').join(''); // YYYYMMDD format
    const newPost = {
      "userid": 6, "date": today, "picture": event.target.picture.value,
      "caption": event.target.caption.value
    }

    fetch(url, { method: 'post', body: JSON.stringify(newPost) })
      .then(function (response) { return ''; })
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