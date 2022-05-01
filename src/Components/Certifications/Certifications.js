
import './Certifications.css'
import Command_Line from '../../media/certifications/Command_Line_Codecademy.png'
import Front_End from '../../media/certifications/Front_End_Codecademy.png'
import HTML from '../../media/certifications/HTML_Codecademy.png'
import Intermediate_Javascript from '../../media/certifications/Intermediate_Javascript_Codecademy.png'
import Javascript from '../../media/certifications/Javascript_Codecademy.png'
import React from '../../media/certifications/React_Codecademy.png'
import React_Native from '../../media/certifications/React_Native_Codecademy.png'
import Vue from '../../media/certifications/Vue_Codecademy.png'


function Certifications() {

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
                <div className='cert-container'>
                    <h2>Codecademy Certifications</h2>
                    <ul >
                        <li>
                            <h3>Front End Engineer</h3>
                            <img src={Front_End} alt='front end certificate'onClick={()=>frameThis(Front_End)}/>
                        </li>
                        <li>
                            <h3>React Native</h3>
                            <img src={React_Native} alt='react native certificate'onClick={()=>frameThis(React_Native)}/>
                        </li>
                        <li>
                            <h3>React</h3>
                            <img src={React} alt='react certificate'onClick={()=>frameThis(React)}/>
                        </li>
                        <li>
                            <h3>Intermediate Javascript</h3>
                            <img src={Intermediate_Javascript} alt='intermediate javascript certificate'onClick={()=>frameThis(Intermediate_Javascript)}/>
                        </li>
                        <li>
                            <h3>Javascript</h3>
                            <img src={Javascript} alt='javascript certificate'onClick={()=>frameThis(Javascript)}/>
                        </li>
                        <li>
                            <h3>Vue</h3>
                            <img src={Vue} alt='vue certificate'onClick={()=>frameThis(Vue)}/>
                        </li>
                        <li>
                            <h3>HTML</h3>
                            <img src={HTML} alt='html certificate'onClick={()=>frameThis(HTML)}/>
                        </li>
                        <li>
                            <h3>Command Line</h3>
                            <img src={Command_Line} alt='command line certificate'onClick={()=>frameThis(Command_Line)}/>
                        </li>
                    </ul>
                </div>

                <div className='highlight' id='highlight'></div>
        </div>
    )
  }
  
  export default Certifications;