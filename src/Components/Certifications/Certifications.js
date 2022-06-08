
import './Certifications.css'
import Command_Line from '../../media/certifications/Command_Line_Codecademy.png'
import Front_End from '../../media/certifications/Front_End_Codecademy.png'
import HTML from '../../media/certifications/HTML_Codecademy.png'
import Intermediate_Javascript from '../../media/certifications/Intermediate_Javascript_Codecademy.png'
import Javascript from '../../media/certifications/Javascript_Codecademy.png'
import React from '../../media/certifications/React_Codecademy.png'
import React_Native from '../../media/certifications/React_Native_Codecademy.png'
import Vue from '../../media/certifications/Vue_Codecademy.png'
import NodeJS from '../../media/certifications/NodeJS_Codecademy.png'
import Responsive_Design from '../../media/certifications/Responsive_Web_FCC.png'
import JavascriptFCC from '../../media/certifications/Javascript_Algorithms_Data_Structures_FCC.png'
import oAuth_2 from '../../media/certifications/oAuth_2.0_Udemy.jpeg'
import Express from '../../media/certifications/Express_Codecademy.png'
import Agile from '../../media/certifications/Agile_Foundations_LinkedinLearning.png'

const codecademyCertifications = [
    {
        title : 'Front End Engineer',
        src : Front_End,
        alt : 'front end certificate from Codecademy',
    },
    {
        title : 'React',
        src : React,
        alt : 'react certificate from Codecademy',
    },
    {
        title : 'Intermediate Javascript',
        src : Intermediate_Javascript,
        alt : 'Intermediate Javascript certificate from Codecademy',
    },
    {
        title : 'Javascript',
        src : Javascript,
        alt : 'Javascript certificate from Codecademy',
    },
    {
        title : 'Vue',
        src : Vue,
        alt : 'Vue certificate from Codecademy',
    },
    {
        title : 'HTML',
        src : HTML,
        alt : 'HTML certificate from Codecademy',
    },
    {
        title : 'Command Line',
        src : Command_Line,
        alt : 'Command Line certificate from Codecademy',
    },
    {
        title : 'NodeJS',
        src : NodeJS,
        alt : 'NodeJS certificate from Codecademy',
    },
    {
        title : 'Express',
        src : Express,
        alt : 'Express certificate from Codecademy',
    },
    
]

const freeCodeCampCertifications = [
    {
        title : 'Responsive Design',
        src : Responsive_Design,
        alt : 'Responsive Design certificate from Free Code Camp',
    },
    {
        title : 'Javascript Algorithms and Data Structures',
        src : JavascriptFCC,
        alt : 'Javascript Algorithms and Data Structures certificate from Free Code Camp',
    },
    
]

const udemyCertifications = [
    {
        title : 'oAuth 2.0',
        src : oAuth_2,
        alt : 'oAuth 2.0 certificate from Udemy',
    },

]

const linkedinLearningCertifications = [
    {
        title : 'Agile Foundations',
        src : Agile,
        alt : 'Agile Foundations certificate from Linkedin Learning',
    },

]

function Certifications() {


    const clickMessage = () => {
        const highlight = document.getElementById('highlight')
        if (!highlight.hasChildNodes()) {
            const h1 = document.createElement('h1')
            h1.innerHTML = 'Click Certificate for Larger View'
            h1.id='h1'
            h1.style.marginBottom = '10rem'
            highlight.appendChild(h1)
        }
    }

    const rmClickMessage = () => {
        const highlight = document.getElementById('highlight')
        const h1 = document.getElementById('h1')
        if (h1) {
            highlight.removeChild(h1)
        }
    }

    const frameThis = (cert) => {
        const highlight = document.getElementById('highlight')
        while (highlight.hasChildNodes()) {
            highlight.removeChild(highlight.firstChild);
          }
        const img = document.createElement('img')
        img.src=cert
        highlight.appendChild(img)
    }

    return (
        <div className='Certifications'>
                <h1 id='name'>Shawn Smith</h1>
                <p className='hr'></p>
                <h4 id='role'>certifications</h4>
                <div className='codecademy cert-container'>
                    <h2>Codecademy Certifications</h2>
                    <ul >
                        {codecademyCertifications.map((cert) => (
                            <li>
                                <h3>{cert.title}</h3>
                                <img 
                                    src={cert.src}  
                                    alt={cert.alt} 
                                    onMouseEnter={clickMessage} 
                                    onMouseOut={rmClickMessage} 
                                    onClick={()=>frameThis(cert.src)} 
                                /> 
                            </li>                            
                        ))}
                    </ul>
                </div>
                <div className='freecodecamp cert-container'>
                    <h2>FreeCodeCamp Certifications</h2>
                    <ul >
                        {freeCodeCampCertifications.map((cert) => (
                            <li>
                                <h3>{cert.title}</h3>
                                <img 
                                    src={cert.src}  
                                    alt={cert.alt} 
                                    onMouseEnter={clickMessage} 
                                    onMouseOut={rmClickMessage} 
                                    onClick={()=>frameThis(cert.src)} 
                                /> 
                            </li>                            
                        ))}
                    </ul>
                </div>
                <div className='udemy cert-container'>
                    <h2>Udemy Certifications</h2>
                    <ul >
                        {udemyCertifications.map((cert) => (
                            <li>
                                <h3>{cert.title}</h3>
                                <img 
                                    src={cert.src}  
                                    alt={cert.alt} 
                                    onMouseEnter={clickMessage} 
                                    onMouseOut={rmClickMessage} 
                                    onClick={()=>frameThis(cert.src)} 
                                /> 
                            </li>                            
                        ))}
                    </ul>
                </div>
                <div className='linkedinLearning cert-container'>
                    <h2>Linkedin Learning Certifications</h2>
                    <ul >
                        {linkedinLearningCertifications.map((cert) => (
                            <li>
                                <h3>{cert.title}</h3>
                                <img 
                                    src={cert.src}  
                                    alt={cert.alt} 
                                    onMouseEnter={clickMessage} 
                                    onMouseOut={rmClickMessage} 
                                    onClick={()=>frameThis(cert.src)} 
                                /> 
                            </li>                            
                        ))}
                    </ul>
                </div>
                <div className='highlight' id='highlight'></div>
        </div>
    )
  }
  
  export default Certifications;