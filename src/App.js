import Heading from './components/Heading';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import WhoAreWe from './components/About';
import Footer from './components/Footer';
import Counsellors from './components/Counsellors/counsellors';
import Testimonial from './components/testimonials/testimonial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';


function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <WhoAreWe></WhoAreWe>
      <Testimonial></Testimonial>
      <Counsellors></Counsellors>
      <Footer></Footer>
    </div>
  );
}

export default App;
