
import './App.css';
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';


function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
