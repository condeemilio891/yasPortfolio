
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NavBar from './Components/navBar/NavBar';

function App() {
  return (
<Router>
  <NavBar/>
  <Routes>
    <Route path="/"/>
    <Route path="/portfolio"/>
    <Route path="/contact"/>
    <Route path="/about"/>
  </Routes>
</Router>
  );
}

export default App;
