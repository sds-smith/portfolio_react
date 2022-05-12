
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
                        <li>
                            <h3>Front End Engineer</h3>
                            <img 
                                src={Front_End} 
                                alt='front end certificate'
                                onMouseEnter={clickMessage}
                                onMouseOut={rmClickMessage}
                                onClick={()=>frameThis(Front_End)}
                            />
                        </li>
                        <li>
                            <h3>React Native</h3>
                            <img 
                                src={React_Native} 
                                alt='react native certificate'
                                onMouseEnter={clickMessage}
                                onMouseOut={rmClickMessage}
                                onClick={()=>frameThis(React_Native)}
                            />
                        </li>
                        <li>
                            <h3>React</h3>
                            <img 
                                src={React} 
                                alt='react certificate'
                                onMouseEnter={clickMessage}
                                onMouseOut={rmClickMessage}
                                onClick={()=>frameThis(React)}
                            />
                        </li>
                        <li>
                            <h3>Intermediate Javascript</h3>
                            <img 
                                src={Intermediate_Javascript} 
                                alt='intermediate javascript certificate'
                                onMouseEnter={clickMessage}
                                onMouseOut={rmClickMessage}
                                onClick={()=>frameThis(Intermediate_Javascript)}
                            />
                        </li>
                        <li>
                            <h3>Javascript</h3>
                            <img 
                                src={Javascript} 
                                alt='javascript certificate'
                                onMouseEnter={clickMessage}
                                onMouseOut={rmClickMessage}
                                onClick={()=>frameThis(Javascript)}
                            />
                        </li>
                        <li>
                            <h3>Vue</h3>
                            <img 
                                src={Vue} 
                                alt='vue certificate'
                                onMouseEnter={clickMessage}
                                onMouseOut={rmClickMessage}
                                onClick={()=>frameThis(Vue)}
                            />
                        </li>
                        <li>
                            <h3>HTML</h3>
                            <img 
                                src={HTML} 
                                alt='html certificate'
                                onMouseEnter={clickMessage}
                                onMouseOut={rmClickMessage}
                                onClick={()=>frameThis(HTML)}
                            />
                        </li>
                        <li>
                            <h3>Command Line</h3>
                            <img 
                                src={Command_Line} 
                                alt='command line certificate'
                                onMouseEnter={clickMessage}
                                onMouseOut={rmClickMessage}
                                onClick={()=>frameThis(Command_Line)}
                            />
                        </li>
                        <li>
                            <h3>NodeJS</h3>
                            <img 
                                src={NodeJS} 
                                alt='node js certificate'
                                onMouseEnter={clickMessage}
                                onMouseOut={rmClickMessage}
                                onClick={()=>frameThis(NodeJS)}
                            />
                        </li>
                    </ul>
                </div>
                <div className='freecodecamp cert-container'>
                    <h2>FreeCodeCamp Certifications</h2>
                    <ul >
                        <li>
                            <h3>Responsive Design</h3>
                            <img 
                                src={Responsive_Design} 
                                alt='responsive design certification'
                                onMouseEnter={clickMessage}
                                onMouseOut={rmClickMessage}
                                onClick={()=>frameThis(Responsive_Design)}
                            />
                        </li>
                        <li>
                            <h3>Javascript Algorithms and Data Structures</h3>
                            <img 
                                src={JavascriptFCC} 
                                alt='Javascript algorithms and data structures certification'
                                onMouseEnter={clickMessage}
                                onMouseOut={rmClickMessage}
                                onClick={()=>frameThis(JavascriptFCC)}
                            />
                        </li>
                    </ul>
                </div>
                <div className='highlight' id='highlight'></div>
        </div>
    )
  }
  
  export default Certifications;