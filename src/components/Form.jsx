import React from 'react'
import { useState } from 'react'
import "./Form.css"

function Form() {
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)
  function validation() {
    //to do: post data to API
  }
  return (
    <div className="Formulaire">
      <h1>Ajoutez votre image</h1>
      <form onSubmit={validation}>
        <ul>
          <li>
            <label for="picture">url de l'image :</label>
            <input
              type="text"
              name="picture"
              placeholder="Upload an image"
            />
          </li>
          <li>
            <label for="caption">Commentaire du post :</label>
            <input
              type="text"
              name="caption"
              placeholder="Your comment"
            />
          </li>
          <input
            type="submit">
          </input>
        </ul>
      </form>
    </div>
  )
}


export default Form;

