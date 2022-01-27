import React from 'react'
import { Link } from "react-router-dom"
import "./InfosDev.css"
import github from '../assets/github2.png'
import linkedin from '../assets/linkedin2.png'

const InfosDev = props => {

  return (
    <div className="InfosDev">
        <h3 className="Dev-Name">{props.name}</h3>
        <div className="contact">
            {props.link !== null ? <div><a className="dev-git" href={props.link}><img className="Github"src={github}></img><p className="Dev-Username">{props.githubuser}</p>
            <p className="Dev-Github">{props.link}</p></a></div> : null}
            {props.linkedin !== null ? <div><a className="dev-linkedin" href={props.linkedin}><img className="Linkedin"src={linkedin}></img><p className="Dev-Linkedin">{props.linkedin}</p></a></div> : null}
        </div>    
    </div>
  );
};

export default InfosDev