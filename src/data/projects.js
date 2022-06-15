import CrownClothing from '../media/crwn-clothing.png'
import AssembleTheJams from '../media/atj.png'
import RandomPasswordGenerator from '../media/rpg.png'
import Weather from '../media/weather.png'
import WHRDL from '../media/WHRDL_card.png'

export const Projects = [
    {   
        id: 'weather-card',
        heading_title : 'Weather App',
        heading_subtitle : 'Vue single-page web app',
        background_image : Weather,
        video_link : null,
        live_link : 'https://sds-smith.github.io/weather/',
        readme_link : 'https://github.com/sds-smith/weather/blob/master/README.md',
        description : 'Search by City/ State/ Country, or by longitudinal coordinates, and receive up-to-the-minute weather data'
    },
    {   
        id: 'atj-card',
        heading_title : 'Assemble the Jams',
        heading_subtitle : 'React single-page web app',
        background_image : AssembleTheJams,
        video_link : 'https://youtu.be/fMgUQI0HRTk',
        live_link : 'https://assemblethejams.netlify.app',
        readme_link : 'https://github.com/sds-smith/assemble-the-jams/blob/main/README.md',
        description : 'Connect to your Spotify Premium account, execute searches and receive search term matches and recommendations, play/pause a song, like/ unlike songs, create custom playlist, and save playlist to your Spotify profile.'
    },
    {   
        id: 'crwn-card',
        heading_title : 'Crown Clothing',
        heading_subtitle : 'React single-page eCommerce app',
        background_image : CrownClothing,
        video_link : null,
        live_link : 'https://sds-crown-clothing.netlify.app',
        readme_link : 'https://github.com/sds-smith/crwn-clothing/blob/master/README.md',
        description : 'Fully-functional eCommerce site built with React 18, React Router 6, React styled components, Firebase. Securely sign-in with Google, or create and account to sign in with username/password. Add items to cart, delete items, securely checkout with Stripe.'
    },
    {   
        id: 'WHRDL-card',
        heading_title : 'WHRDL',
        heading_subtitle : 'React Native mobile app',
        background_image : WHRDL,
        video_link : null,
        live_link : '/WHRDL',
        readme_link : 'https://github.com/sds-smith/whrdl/blob/master/README.md',
        description : 'Clone of a popular word game built with React Native and Expo. Guess the secret word in six tries. Reset game, get hints'
    },
    {   
        id: 'rpg-card',
        heading_title : 'Password Generator',
        heading_subtitle : 'HTML/JS web app',
        background_image : RandomPasswordGenerator,
        video_link : null,
        live_link : 'https://sds-smith.github.io/password_generator/',
        readme_link : 'https://github.com/sds-smith/password_generator/blob/master/README.md',
        description : 'Generate random unique password and copy to clipboard'
    }
]