import React from 'react'
import InfosDev from "../components/InfosDev"
import './Infos.css'

const contactInfo = [
    {
      name: 'Guillaume',
      githubuser: 'gunpici',
      link: 'https://github.com/gunpici',
      linkedin: 'www.linkedin.com/in/guillaume-nivesse-Dev-Web',
    },
    {
      name: 'Mylène',
      githubuser: 'MyleneVinci',
      link: 'https://github.com/MyleneVinci',
      linkedin: 'https://www.linkedin.com/in/myl%C3%A8ne-vinci-897ab3166/',
    },
    {
      name: 'Stephen',
      githubuser: 'StephenBailly',
      link: 'https://github.com/StephenBailly',
      linkedin: 'https://www.linkedin.com/in/stephen-bailly-601809105/',
    },
    {
      name: 'Sylvain',
      githubuser: 'mentat51',
      link: 'https://github.com/mentat51',
      linkedin: null,
    },
    {
      name: 'Juliette',
      githubuser: 'JulietteMahe',
      link: 'https://github.com/JulietteMahe',
      linkedin: 'https://www.linkedin.com/in/juliette-mahe-webdev/',
    },
];
const Infos = () => {
    return (
        <div className='Infos'>              
                <h1 className="pageTitle">Notre équipe de développeurs</h1>
                <div className='InfosList'>
                {contactInfo.map((contact, index) => (
                   <InfosDev
                    key={index}
                    name={contact.name}
                    githubuser={contact.githubuser}
                    link={contact.link}
                    linkedin={contact.linkedin}
                   />
                ))} 
                </div>
        </div>
    )
}

export default Infos