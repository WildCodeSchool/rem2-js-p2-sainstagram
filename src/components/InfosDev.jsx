import React from 'react'
import "./InfosDev.css"

const InfosDev = props => {

  return (
    <div className="InfosDev">
        <h3 className="Dev-Name">{props.name}</h3>
        <div className="contact">
            {props.link !== null ? <div><p className="Dev-Username">{props.githubuser}</p>
            <p className="Dev-Github">{props.link}</p></div> : null}
            {props.linkedin !== null ? <p className="Dev-Linkedin">{props.linkedin}</p> : null}
        </div>    
    </div>
  );
};

export default InfosDev