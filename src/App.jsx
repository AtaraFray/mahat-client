import logo from './logo.svg';
import './App.css';
import { Excel } from './Components/Excel';
// import { FormikFormDemo } from './Components/demo/FormikFormDemo';
import { Register } from './Components/Register';
import { Menu } from './Components/Menu';
import { Login } from './Components/Login';
import { UploadData } from './Components/UploadData';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
 <Router>
        <div className="App">
        <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="/About">About</Link>
        </div>
       
        <Routes>
          <Route path="/" element={<Menu  />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        
      </div>
    </Router>
    {/* <Excel></Excel> */}
    {/* <Menu></Menu> */}
    {/* <Login></Login> */}
    {/* <Register></Register> */}
    {/* <UploadData></UploadData> */}
    </div>
  );
}

export default App;
