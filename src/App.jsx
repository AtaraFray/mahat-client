import logo from './logo.svg';
import './App.css';
import { Excel } from './Components/Excel';
// import { FormikFormDemo } from './Components/demo/FormikFormDemo';
// import { Register } from './Components/Register';
import { Menu } from './Components/Menu';
import { Login } from './Components/Login';
import { UploadData } from './Components/UploadData';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from './Components/Home';
import { About } from './Components/About';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
          <Route path="/" element={<Menu  />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/UploadData" element={<UploadData  />} />
          <Route path="/Excel" element={<Excel/>} />

        </Routes>
        </Router>

 {/* <Router>
        <div className="App">
        <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="/UploadData">UploadData</Link>

        </div>
       
        <Routes>
          <Route path="/" element={<Menu  />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/UploadData" element={<UploadData  />} />
        </Routes>
        
      </div>
    </Router> */}
  
    </div>
  );
}

export default App;
