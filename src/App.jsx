import logo from './logo.svg';
import './App.css';
import { Excel } from './Components/Excel';
// import { FormikFormDemo } from './Components/demo/FormikFormDemo';
import { Register } from './Components/Register';
import { Menu } from './Components/Menu';
import { Login } from './Components/Login';
import { UploadData } from './Components/UploadData';

function App() {
  return (
    <div className="App">
    {/* <Excel></Excel> */}
    <Menu></Menu>
    {/* <Login></Login> */}
    {/* <Register></Register> */}
    <UploadData></UploadData>
    </div>
  );
}

export default App;
