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
                        <Link className='card link' id='ios-card' to={{ pathname: "https://appetize.io/embed/8bnmakzrptf1hv9dq7v7bnteem?autoplay=true&debug=true&device=iphone12&embed=true&scale=73&screenOnly=false&xDocMsg=true&xdocMsg=true&params=%7B%22EXDevMenuDisableAutoLaunch%22%3Atrue%2C%22EXKernelLaunchUrlDefaultsKey%22%3A%22exp%3A%2F%2Fexp.host%2F%40sds-smith%2Fbaad67%2BVSlh7wof24%22%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D&osVersion=14.5" }} target="_blank" >
                        </Link>
                        <p className='description'>Click phone to run Simulator in your Browser</p>
                    </li><br/>   
                    <li>
                        <h3>Use Android Simulator</h3>
                        <Link className='card link' id='android-card' to={{ pathname: "https://appetize.io/embed/xc1w6f1krd589zhp22a0mgftyw?autoplay=true&debug=true&device=pixel4&embed=true&launchUrl=exp%3A%2F%2Fexp.host%2F%40sds-smith%2Fbaad67%2BVSlh7wof24&scale=81&screenOnly=false&xDocMsg=true&xdocMsg=true&params=%7B%22EXDevMenuDisableAutoLaunch%22%3Atrue%2C%22EXKernelLaunchUrlDefaultsKey%22%3A%22exp%3A%2F%2Fexp.host%2F%40sds-smith%2Fbaad67%2BVSlh7wof24%22%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D&osVersion=11.0" }} target="_blank">
                        </Link>
                         <p className='description'>Click phone to run Simulator in your Browser</p>
                    </li> 
                    <li>
                        <h3>Use your own Device</h3>
                        <p>(with the Expo Go app)</p>
                        <div className='card' id='my-device-card' >
                        </div>
                         <p className='description'>iOS : Scan with your Camera App</p>
                         <p className='description'>Android : Scan with your Expo Go App</p>

                    </li> 
                </ul>             
        </div>
    );
  }
  
  export default WHRDL;




