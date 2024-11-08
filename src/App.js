import './App.css';
import Banner from './Components/Banner/Banner';
import Choose from './Components/ChooseUs/Choose';
import Client from './Components/Clients/Client';
import Contact from './Components/Contact/Contact';
import Facility from './Components/Facility/Facility';
import Footer from './Components/Footer/Footer';
import Funnel from './Components/Funnel/Funnel';
import Navbar from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Insight from './Components/Insight/Insight';
import Service from './Components/Servicess/Service';
import Welcome from './Components/Welcome/Welcome';
import Work from './Components/Work/Work';

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Welcome/>
    <Funnel/>
    <Choose/>
    <Facility/>
    <Service/>
    <Banner/>
    <Work/>
    <Client/>
    <Insight/>
    <Contact/>
    <Footer/>
    
    </>
  );
}

export default App;
