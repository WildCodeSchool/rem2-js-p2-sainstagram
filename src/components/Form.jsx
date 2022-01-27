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
      <div className='TextGlobal'>
        <h1>Ajoutez votre image</h1>
          <form onSubmit={validation}>
            <ul>
              <li>
                <label for="picture">Url de l'image :</label>
              </li>
              <li>
                <input
                  type="text"
                  name="picture"
                  placeholder=""
                />
              </li>
              <li>
                <label for="caption">Commentaire du post :</label>
              </li>
              <li>
                <input
                  type="text"
                  name="caption"
                  placeholder=""
                />
              </li>
              <input
                type="submit"
                value="Poster"
                >
              </input>
            </ul>
          </form>
      </div>
    </div>
  )
}


export default Form;

