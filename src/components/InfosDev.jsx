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
            {props.link !== null ? <div><Link className="dev-git" to={props.link}><img className="Github"src={github}></img><p className="Dev-Username">{props.githubuser}</p>
            <p className="Dev-Github">{props.link}</p></Link></div> : null}
            {props.linkedin !== null ? <div><Link className="dev-linkedin" to={props.linkedin}><img className="Linkedin"src={linkedin}></img><p className="Dev-Linkedin">{props.linkedin}</p></Link></div> : null}
        </div>    
    </div>
  );
};

export default InfosDev