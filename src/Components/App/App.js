import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import BusinessCard from '../BusinessCard/BusinessCard';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'
import About from '../About/About'


function App() {
  return (
    <Router>
      <Route>
        <Header />
      </Route>

      <Route>
        <Contact />
      </Route>

      <Route exact path='/'>
        <BusinessCard />
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
