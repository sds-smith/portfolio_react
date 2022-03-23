import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ContactBar from '../ContactBar/ContactBar'
import Background from '../Background/Background'
import BusinessCard from '../BusinessCard/BusinessCard';
import Portfolio from '../Portfolio/Portfolio'
import About from '../About/About'
import ContactForm from '../ContactForm/ContactForm'


function App() {
  return (
    <Router>
      <Route >
        <Header />
      </Route>

      <Route>
        <ContactBar />
      </Route>

      <Route>
        <Background />
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
    </Router>

  );
}

export default App;
