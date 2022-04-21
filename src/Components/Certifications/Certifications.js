
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

    return (
        <div className='Certifications'>
                <h1 id='name'>Shawn Smith</h1>
                <p className='hr'></p>
                <h4 id='role'>certifications</h4>
                <ul className='cert-container'>
                    <li>
                        <h3>Front End Engineer</h3>
                        <img src={Front_End} alt=''/>
                    </li>
                    <li>
                        <h3>React Native</h3>
                        <img src={React_Native} alt=''/>
                    </li>
                    <li>
                        <h3>React</h3>
                        <img src={React} alt=''/>
                    </li>
                    <li>
                        <h3>Intermediate Javascript</h3>
                        <img src={Intermediate_Javascript} alt=''/>
                    </li>
                    <li>
                        <h3>Javascript</h3>
                        <img src={Javascript} alt=''/>
                    </li>
                    <li>
                        <h3>Vue</h3>
                        <img src={Vue} alt=''/>
                    </li>
                    <li>
                        <h3>HTML</h3>
                        <img src={HTML} alt=''/>
                    </li>
                    <li>
                        <h3>Command Line</h3>
                        <img src={Command_Line} alt=''/>
                    </li>
                    <li></li>
                </ul>
        </div>
    )
  }
  
  export default Certifications;