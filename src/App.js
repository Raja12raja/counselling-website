import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/AboutUs";
import Info from "./components/Info";
import Events from "./components/Events";
import Counsellors from "./components/About Us Components/Teams/Counsellors";
import Head from "./components/About Us Components/Teams/Head";
import Coordinators from "./components/About Us Components/Teams/coordinators/Coordinators";
// import PG from "./components/About Us Components/Teams/PG";
import Office from "./components/About Us Components/Teams/Office";
import Committee from "./components/About Us Components/Teams/committee/Committee";

function App() {
  return (
    <div className="App overflow-hidden">
      <Heading></Heading>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" index element={<Home />}></Route>
          <Route
            exact
            path="/counseling-website-IIT-Indore"
            index
            element={<Home />}
          ></Route>
          <Route exact path="/about" element={<About />}>
            <Route exact path="Counsellors" element={<Counsellors />}></Route>
            <Route exact path="" element={<Counsellors />}></Route>
            <Route exact path="Head" element={<Head />}></Route>
            <Route exact path="Coordinators" element={<Coordinators />}></Route>
            {/* <Route exact path="PG" element={<PG />}></Route> */}
            <Route exact path="office" element={<Office />}></Route>
            <Route exact path="committee" element={<Committee />}></Route>
          </Route>
          <Route exact path="/information" element={<Info />}></Route>
          <Route exact path="/events" element={<Events />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
