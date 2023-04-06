import Heading from './components/Heading'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import ReactDOM from 'react-dom';
import {Routes,Route, Link, BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/AboutUs";
import Info from "./components/Info";
import Events from "./components/Events";



function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
        <Route exact path = "/" element={<Home/>}></Route>
        <Route exact path = "/about" element={<About/>}></Route>
        <Route exact path = "/information" element={<Info/>}></Route>
        <Route exact path = "/events" element={<Events/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
