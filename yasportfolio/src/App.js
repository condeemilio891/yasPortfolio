
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavBar from './Components/navBar/NavBar';
import PortfolioPage from './pages/portfolioPage/portfolioPage';
import BackgroundSlider from './Components/backgorundSlider/backgroundSlider';
import ContactPage from './pages/contactPage/ContactPage';
function App() {
  return (
<Router>
  <NavBar/>
  <Routes>
    <Route exact path= '/yasPortfolio' element={<BackgroundSlider/>}/>
    <Route exact path= "/" element={<BackgroundSlider/>}/>
    <Route path="/portfolio" element={<PortfolioPage/>}/>
    <Route path="/contact" element= {<ContactPage/>}/>
    <Route path="/about"/>
  </Routes>
</Router> 
// adding example 
  );
}

export default App;
