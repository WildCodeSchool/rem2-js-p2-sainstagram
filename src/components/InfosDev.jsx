import React from 'react'
import "./InfosDev.css"
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'

const InfosDev = props => {

  return (
    <div className="InfosDev">
        <h3 className="Dev-Name">{props.name}</h3>
        <div className="contact">
            {props.link !== null ? <div><img className="Github"src={github}></img><p className="Dev-Username">{props.githubuser}</p>
            <p className="Dev-Github">{props.link}</p></div> : null}
            {props.linkedin !== null ? <div><img className="Linkedin"src={linkedin}></img><p className="Dev-Linkedin">{props.linkedin}</p></div> : null}
        </div>    
    </div>
  );
};

export default InfosDev