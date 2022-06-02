
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/Portfolio-React-HW-19/" component={AboutMe} />
        <Route exact path="/Portfolio-React-HW-19/about" component={AboutMe} />
        <Route exact path="/Portfolio-React-HW-19/project" component={Portfolio} />
        <Route path="/Portfolio-React-HW-19/contact" component={ContactMe} />
        <Route path="/Portfolio-React-HW-19/resume" component={Resume} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
