
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavBar from './Components/navBar/NavBar';
import PortfolioPage from './pages/portfolioPage/portfolioPage';
import BackgroundSlider from './Components/backgorundSlider/backgroundSlider';
function App() {
  return (
<Router>
  <NavBar/>
  <Routes>
    <Route path="/" element={<BackgroundSlider/>}/>
    <Route path="/portfolio" element={<PortfolioPage/>}/>
    <Route path="/contact"/>
    <Route path="/about"/>
  </Routes>
</Router> 

  );
}

export default App;
