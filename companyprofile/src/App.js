import React from 'react';
import '../src/components/css/App.css'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import OurTeam from './components/pages/OurTeam';
import ContactUs from './components/pages/ContactUs';
import Projects from './components/pages/Projects';

function App() {
  return (
   <>
   <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/ourteam' exact component={OurTeam} />
        <Route path='/contactus' exact component={ContactUs} />
        <Route path='/projects' exact component={Projects} />
      </Switch>
   </Router>
   </>
  );
}

export default App;
