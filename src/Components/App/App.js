import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import './App.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'
import Background from '../Background/Background'
import BusinessCard from '../BusinessCard/BusinessCard';
import Portfolio from '../Portfolio/Portfolio'
import About from '../About/About'


function App() {
  return (
    <Router>
      <Route >
        <Header />
      </Route>

      <Route>
        <Contact />
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
    </Router>

  );
}

export default App;
