import Heading from './components/Heading'
import Footer from './components/Footer'
import Counsellor from './components/counsellors'
import Testimonial from './components/testimonials/testimonial';

function App() {
  return (
    <div className="App">
      <Heading></Heading>
      <Testimonial></Testimonial>
      <Counsellor name="ishaan" phone ="9971260556" email="ishaanmittal123@gmail.com"></Counsellor>
      <Counsellor></Counsellor>
      <Counsellor></Counsellor>
      <Footer></Footer>
    </div>
  );
}

export default App;
