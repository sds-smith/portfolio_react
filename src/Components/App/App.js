
import { useMediaQuery } from '../../util/customHooks'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import backgroundVideo from '../../media/Sea - mobile 24216.mp4'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import CircleMenu from '../CircleMenu/CircleMenu'
import ContactBar from '../ContactBar/ContactBar'
import BusinessCard from '../BusinessCard/BusinessCard';
import Portfolio from '../Portfolio/Portfolio'
import About from '../About/About'
import ContactForm from '../ContactForm/ContactForm'
import WHRDL from '../WHRDL/WHRDL'
import Certifications from '../Certifications/Certifications'

function App() {

  let isMobile = useMediaQuery('(max-width: 1020px)')

  return (
    
      <Router>
        <video src={backgroundVideo} autoPlay muted loop playsInline className='BackgroundVideo' />
        <Route >
          <Header />
        </Route>

        <Route>
          <CircleMenu isMobile={isMobile}/>
        </Route>
        
        <Route>
          <ContactBar isMobile={isMobile}/>
        </Route>

        <Route exact path='/'>
          <BusinessCard />
        </Route>

        <Route path='/portfolio'>
          <Portfolio />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route>
          <Footer />
        </Route>  

        <Route path='/contact_form'>
          <ContactForm />
        </Route>  

        <Route path='/WHRDL'>
          <WHRDL />
        </Route>

        <Route path='/certifications'>
          <Certifications />
        </Route>
      </Router>
  );
}

export default App;
