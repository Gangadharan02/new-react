
import './App.css';
import Home from './Home';
import Contact from './Contact';
import About_us from './About_us';
import {
  Routes,
  BrowserRouter,
  Route,
} from   "react-router-dom";
import Services from './Services';
import Login from './Login';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
        <Route path="" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/About_us" element={<About_us/>} />
        <Route path="/Services" element={<Services/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
