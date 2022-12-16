import Dashboard from "./components/Dashboard";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import About from "./components/About";
import Admin from './components/Admin'
import Navbar from "./components/Navbar";
import 'flowbite'
import Login from "./components/Login";
import Health from "./components/Health";
import Notfound from "./components/Notfound";

function App() {
  return (
  <>
  {/* <Dashboard/> */}
  <Navbar/>
  <Router>
    <Routes>
      <Route exact path="/" element={<Dashboard></Dashboard>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/Admin" element={<Admin/>}></Route>
      <Route exact path="/Login" element={<Login/>}></Route>
      <Route exact path="/Health" element={<Health/>}></Route>
      <Route exact path="*" element={<Notfound/>}></Route>

      

    </Routes>
  </Router>
      </>
  );
}

export default App;
