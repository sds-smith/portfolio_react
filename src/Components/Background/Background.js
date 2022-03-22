import { Player, Shortcut } from 'video-react';
import Video from '../../media/Sea - desktop 24216 (1).mp4'
import './Background.css'

function Background() {
    return (
        <div className='Background'>
                <Player autoPlay muted loop className='BackgroundVideo'>
                    <source src={Video} type="video/mp4" />
                    <Shortcut clickable={false} />
                </Player>
        </div>
    );
  }
  
  export default Background;