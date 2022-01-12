import React from 'react'
import "./CardProfile.css"

const CardProfile = ({infoProfile}) => {

    return (
        <div className='profile'>
            <img src={infoProfile.profilepic} alt={infoProfile.name} />
            <h3>{infoProfile.name}</h3>
            {infoProfile.constellation !== null ? <p>{infoProfile.category} de {infoProfile.constellation}</p> : <p>{infoProfile.category}</p>}
            {infoProfile.trainingplace !== null ? <p>{infoProfile.trainingplace}</p> : null}
            <p>Age: {infoProfile.age} ans, Lieu de naissance: {infoProfile.birthplace}</p>
            <p>{infoProfile.description}</p>
        </div>
        
    )
}

export default CardProfile
