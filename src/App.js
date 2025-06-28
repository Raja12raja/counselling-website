import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Appoinment from "./components/Profile/appointment";
import Profiles from "./components/Profiles";
import Booking from "./components/Profile/booking";
import About from "./components/AboutUs";
import Info from "./components/Info";
import Events from "./components/Events";
import Counsellors from "./components/About Us Components/Teams/Counsellors";
import Head from "./components/About Us Components/Teams/Head";
import Coordinators from "./components/About Us Components/Teams/coordinators/Coordinators";
// import PG from "./components/About Us Components/Teams/PG";
import Office from "./components/About Us Components/Teams/Office";
import Committee from "./components/About Us Components/Teams/committee/Committee";
import Eventk1718 from "./components/Events Components/Events17_18";
import Eventk19 from "./components/Events Components/Events_19";
import Eventk2021 from "./components/Events Components/Events20_21";
import Eventk22 from "./components/Events Components/Events_22";
import Loader from "./components/BarLoader";
import Error from "./components/ErrorComponents/error";
import { useState, useEffect } from "react";
import Counselor from "./components/Profile/counselor";


function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
    <div className="App overflow-hidden">
      {
        loading ? <Loader /> :
        <div>
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
          <Route exact path="/appointment" element={<Appoinment />}></Route>
          <Route exact path="/profiles" element={<Profiles />}></Route>
          <Route exact path="/booking" element={<Booking />}></Route>
          <Route exact path="/counselor/:counselorId" element={<Counselor />}></Route>
          <Route exact path="/events" element={<Events />}>
            <Route exact path="" element={<Eventk22/>}></Route>
            <Route exact path="Eventk1718" element={<Eventk1718/>}></Route>
            <Route exact path="Eventk19" element={<Eventk19/>}></Route>
            <Route exact path="Eventk2021" element={<Eventk2021/>}></Route>
            <Route exact path="Eventk22" element={<Eventk22/>}></Route>
          </Route>
          <Route exact path="/error" element={<Error/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
      </div>
      }
    </div>
  );
}

export default App;
