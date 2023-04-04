import Heading from './components/Heading'
import Navbar from './components/Navbar'
import Carousel from './components/Carousels'
import Footer from './components/Footer'
import Counsellor from './components/counsellors'
import Testimonial from './components/testimonials/testimonial';

function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <Navbar></Navbar>
      <Carousel></Carousel>
      <Testimonial></Testimonial>
      <Counsellor name="ishaan" phone ="9971260556" email="ishaanmittal123@gmail.com"></Counsellor>
      <Counsellor></Counsellor>
      <Counsellor></Counsellor>
      <Footer></Footer>
    </div>
  );
}

export default App;
