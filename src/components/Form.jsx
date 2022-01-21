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
          <label for="picture">url de l'image</label>
        <input
          type="text"
          name="picture"
          placeholder="Upload an image"
        />
          <label for="caption">Commentaire du post</label>
        <input
          type="text"
          name="caption"
          placeholder="Your comment"
        />
        <input
          type="submit">

          </input>
        </form>
      </div>
    )
  }
 

export default Form;

