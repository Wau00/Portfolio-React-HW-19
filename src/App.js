
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';
import { Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/Portfolio-React-HW-19/" ><AboutMe /></Route>
          <Route exact path="/Portfolio-React-HW-19/about" ><AboutMe /></Route>
          <Route exact path="/Portfolio-React-HW-19/project"><Portfolio /></Route>
          <Route path="/Portfolio-React-HW-19/contact" ><ContactMe /></Route>
          <Route path="/Portfolio-React-HW-19/resume" ><Resume /></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
