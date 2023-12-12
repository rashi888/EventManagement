import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AboutUs from './Components/About/AboutUs';
import Login from './Components/Login/Login';
import CompanyRegistration from './Components/CompanyRegister/CompanyRegister';
import UserRegister from './Components/UserRegister/UserRegister';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/" element={<Login/>}/>
      <Route path="/registerCompany" element={<CompanyRegistration/>}/>
      <Route path="/registerUser" element={<UserRegister/>}/>
     
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
