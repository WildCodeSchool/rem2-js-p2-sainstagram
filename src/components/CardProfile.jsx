import React from 'react'
import "./CardProfile.css"

const CardProfile = ({infoProfile}) => {
    return (
        <div className="Cardprofile">
          <img className='Cardprofile-profile-picture' src={infoProfile.profilepic} alt={infoProfile.name} />
            <h3 className='Cardprofile-profile-name'>{infoProfile.name}</h3>
            {infoProfile.constellation !== null ? <p className='Cardprofile-profile-constellation'>{infoProfile.category}<br></br><span>Constellation </span> {infoProfile.constellation}</p> : <p>{infoProfile.category}</p>}
            <div className="Cardprofile-profile-full-description">
                {infoProfile.trainingplace !== null ? <p className='Cardprofile-profile-training'>{infoProfile.trainingplace}</p> : null}
                <p className='Cardprofile-profile-birth'>Age : {infoProfile.age} ans, Lieu de naissance : {infoProfile.birthplace}</p>
                <p className='Cardprofile-profile-description'>{infoProfile.description}</p>
            </div>
        </div> 
    )
}
/*${infoProfile.category} */
export default CardProfile
