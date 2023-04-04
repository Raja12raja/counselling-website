import Heading from './components/Heading'
import Navbar from './components/Navbar'
import Example from './components/Carousels'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Counsellors from './components/Counsellors/counsellors'
import Testimonial from './components/testimonials/testimonial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <Navbar></Navbar>
      <Example></Example>
      <Carousel></Carousel>
      <Testimonial></Testimonial>
      <Counsellors name="ishaan" phone ="9971260556" email="ishaanmittal123@gmail.com"></Counsellors>
      <Footer></Footer>
    </div>
  );
}

export default App;
