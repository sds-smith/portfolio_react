import { Link } from 'react-router-dom'
import './WHRDL.css'

function WHRDL() {
    return (
        <div className='WHRDL' >
                <h1 id='name'>Shawn Smith</h1>
                <p className='hr'></p>
                <h4 id='role'>WHRDL Word Guessing Game Demo</h4>
                <ul className='WHRDL-list'>
                    <li>
                        <h3>Use iOS Simulator</h3>
                        <div className='card' id='ios-card' >
                            <Link className='WHRDL-link' id='ios' to={{ pathname: "https://appetize.io/embed/8bnmakzrptf1hv9dq7v7bnteem?autoplay=false&debug=true&device=iphone12&embed=true&scale=73&screenOnly=false&xDocMsg=true&xdocMsg=true&params=%7B%22EXDevMenuDisableAutoLaunch%22%3Atrue%2C%22EXKernelLaunchUrlDefaultsKey%22%3A%22exp%3A%2F%2Fexp.host%2F%40sds-smith%2F037c0d%2Bm6KCUybkh2%22%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D&osVersion=14.5" }} target="_blank" >Demo</Link>
                            <Link className='WHRDL-link rm' id='atj-readme' to={{ pathname: "https://github.com/sds-smith/assemble-the-jams#readme"}} target='_blank'>About</Link>  
                        </div>
                        <p className='description'>Connect to Spotify API, search...{/* songs, create custom playlist, and save playlist to your Spotify profile.*/}</p>
                    </li><br/>   
                    <li>
                        <h3>Use Android Simulator</h3>
                        <div className='card' id='rpg-card'>
                            <Link className='WHRDL-link' id='pwgen' to={{ pathname: "https://sds-smith.github.io/password_generator/" }} target="_blank" >Demo</Link>
                            {/* <span className='divider'>|</span> */}
                            <Link className='WHRDL-link rm' id='pwgen-readme' to={{ pathname: "https://github.com/sds-smith/password_generator#readme"}} target='_blank'>About</Link>  
                        </div>
                         <p className='description'>Generate random unique password and{/* copy to clipboard*/}</p>
                    </li> 
                </ul>             
        </div>
    );
  }
  
  export default WHRDL;




